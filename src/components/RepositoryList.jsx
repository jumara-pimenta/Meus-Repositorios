import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/jumara-pimenta/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Meus Repositórios</h1>
            <h4>Acesse aqui algumas das aplicações e projetos realizados por mim em bootcamps, imersões ou desafios.</h4>
            <ul>
                {repositories.map(repository => {
                   return <RepositoryItem key={repository.name} repository={repository}/>

                })}
            </ul>
        </section>
    );
}