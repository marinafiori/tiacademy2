import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, FormGroup, Input, Label, Spinner,Button,Alert } from 'reactstrap'
import { api } from '../../../config';

export const EditarCliente= (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const EditarCliente=async e=>{
        e.preventDefault();
        console.log("Editar Cliente")

       
    const headers ={
        'Content-Type':'application/json'
    }

        await axios.put(api+"/editarcliente",{id,nome,endereco,cidade,uf,nascimento},{headers})
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
        const getCliente =async ()=>{
            await axios.get(api+"/cliente/"+id)
            .then((response)=>{
                setNome(response.data.cliente.nome);
                setEndereco(response.data.cliente.endereco);
                setCidade(response.data.cliente.cidade);
                setUf(response.data.cliente.uf);
                setNascimento(response.data.cliente.nascimento);
            })
            .catch(()=>{
                console.log("Error nao foi possivelconectar a api")
            });
        }
        getCliente();
    },[id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-50 p-2">
                        <h1>Editar um Cliente</h1>
                    </div>
                    <div>
                        <Link to={"/visualizarcliente/"}
                            className="btn btn-outline-primary btn-sm m-3">Listar </Link>
                        <Link to={"/cliente/" + id}
                            className="btn btn-outline-primary btn-sm m-3">Consultar </Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={EditarCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="Nome"
                            placeholder="Nome" value={nome} 
                            onChange={e=> setNome(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco"
                            placeholder="Endereço" value={endereco}
                            onChange={e=>setEndereco(e.target.value )} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="Cidade"
                            placeholder="Cidade" value={cidade}
                            onChange={e=>setCidade(e.target.value )} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="UF"
                            placeholder="UF" value={uf}
                            onChange={e=>setUf(e.target.value )} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Nascimento</Label>
                        <Input type="text" name="Nascximento"
                            placeholder="Nascimento" value={nascimento}
                            onChange={e=>setNascimento(e.target.value )} />
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