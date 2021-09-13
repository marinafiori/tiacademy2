
import axios from 'axios';
import { Alert } from 'reactstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from "reactstrap"

import { api } from '../../../config';

export const VisualizarServico = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/listaservicos")
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro:Não foi possivel' +
                        'conecetar a API.'
                })
            });
    }
const apagarServico = async(idServico)=>{
    console.log(idServico);
    const headers={
        'Content-Type':'application/json'
    }

    await axios.delete(api+"/apagarservico/"+idServico,{headers})
    .then((response)=>{
        console.log(response.data.error);
        getServicos();
    })
    .catch(()=>{
        setStatus({
            type:'error',
            message:'Erro:Não foi possivel acesar a API'
        });
    });
}

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>informações do serviço</h1>
                    </div>

                    
                    <div className="p-2">
                        <Link to="/cadastrarservico"
                            className="btn btn-outline-primary btn-sm">
                            Cadastrar
                        </Link>
                    </div>
                    </div>
                  
                  <Table striped hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Servico</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    <Link to = {"/servico/"+item.id}
                                    className="btn btn-outline-primary btn-sm m-3">Consultar</Link>
                                    <Link to = {"/editarservico/"+item.id}
                                    className="btn btn-outline-warning btn-sm m-3">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-3"
                                    onClick={()=>apagarServico(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}


