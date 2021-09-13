import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, FormGroup, Input, Label, Spinner,Button,Alert } from 'reactstrap'
import { api } from '../../../config';

export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtServico=async e=>{
        e.preventDefault();
        console.log("Editar")

       
    const headers ={
        'Content-Type':'application/json'
    }

        await axios.put(api+"/editarservico",{id,nome,descricao},{headers})
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
        const getServico =async ()=>{
            await axios.get(api+"/servico/"+id)
            .then((response)=>{
                setNome(response.data.servico.nome);
                setDescricao(response.data.servico.descricao);
            })
            .catch(()=>{
                console.log("Error nao foi possivelconectar a api")
            });
        }
        getServico();
    },[id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-50 p-2">
                        <h1>Editar um serviço</h1>
                    </div>
                    <div>
                        <Link to={"/visualizarservico/"}
                            className="btn btn-outline-primary btn-sm m-3">Listar </Link>
                        <Link to={"/servico/" + id}
                            className="btn btn-outline-primary btn-sm m-3">Consultar </Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome"
                            placeholder="nome do serviço" value={nome} 
                            onChange={e=> setNome(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descriçao</Label>
                        <Input type="text" name="descricao"
                            placeholder="descriçao do serviço" value={descricao}
                            onChange={e=>setDescricao(e.target.value )} />
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