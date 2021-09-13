import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, FormGroup, Input, Label, Spinner,Button,Alert } from 'reactstrap'
import { api } from '../../../config';

export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);
    const [ClienteId, setClienteId] = useState('');
    const [ServicoId, setServicoId] = useState('');
    const [valor, setvalor] = useState('');
    const [data, setdata] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const EditarPedido=async e=>{
        e.preventDefault();
        console.log("Editar Pedido")

       
    const headers ={
        'Content-Type':'application/json'
    }

        await axios.put(api+"/editarpedido",{id,ClienteId,ServicoId,valor,data},{headers})
        .then((response)=>{
            console.log(response.data.error);
            console.log(response.data.message);
                   })
        .catch(()=>{
            setStatus({
                type:'error',
                message:'Erro:Não foi possivel acessar a API'
            });
        });
    };

    useEffect(() =>{
        const getPedido =async ()=>{
            await axios.get(api+"/pedido/"+id)
            .then((response)=>{
                setClienteId(response.data.pedido.ClienteId);
                setServicoId(response.data.pedido.ServicoId);
                setvalor(response.data.pedido.valor);
                setdata(response.data.pedido.data);
            })
            .catch(()=>{
                console.log("Error nao foi possivelconectar a api")
            });
        }
        getPedido();
    },[id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-50 p-2">
                        <h1>Editar um Pedido</h1>
                    </div>
                    <div>
                        <Link to={"/visualizarpedido/"}
                            className="btn btn-outline-primary btn-sm m-3">Listar </Link>
                        <Link to={"/servico/" + id}
                            className="btn btn-outline-primary btn-sm m-3">Consultar </Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={EditarPedido}>
                    <FormGroup className="p-2">
                        <Label>ClienteId</Label>
                        <Input type="text" name="Cliente"
                            placeholder="Cliente ID" value={ClienteId} 
                            onChange={e=> setClienteId(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>ServicoId</Label>
                        <Input type="text" name="ServiçoId"
                            placeholder="Serviço ID" value={ServicoId}
                            onChange={e=>setServicoId(e.target.value )} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>valor</Label>
                        <Input type="text" name="valor"
                            placeholder="Valor" value={valor}
                            onChange={e=>setvalor(e.target.value )} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="Data"
                            placeholder="Data" value={data}
                            onChange={e=>setdata(e.target.value )} />
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="warning" disabled>Salvando...
                            <Spinner size="sm" color="warning" /></Button> :
                        <Button type="submit" outline color="warning">Salvar</Button>}
                        
                </Form>

            </Container>
        </div>
    )
}