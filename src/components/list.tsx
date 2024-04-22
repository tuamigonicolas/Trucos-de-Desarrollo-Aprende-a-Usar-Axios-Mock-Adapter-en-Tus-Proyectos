'use client'

import { useEffect, useState } from "react";

import axios from "axios";

import ComponentItem from "./item";

export default function ComponentList() {
    const [list_users, setList_users] = useState<Props_users[]>([]);

    useEffect(() => {
        const load_users = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setList_users(data);
        }

        load_users();

    }, []);

    return (
        <section className="grid grid-cols-3 gap-5 w-full">
            {
                (list_users.length === 0) ?
                    <span title="Cargando usuarios..." className="text-secondary">
                        Cargando usuarios...
                    </span>
                    :
                    list_users.map(user => {
                        return <ComponentItem key={user.id} {...user} />
                    })
            }
        </section>
    )
}