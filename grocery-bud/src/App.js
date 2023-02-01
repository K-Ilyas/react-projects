import { useEffect, useState } from 'react';
import { Button, Clear, Conatiner, ContainerHeader, Form, Input, Items, Main } from './components/components'
import { v4 as uuidv4 } from 'uuid';

import GlobalStyle from './components/global'
import './index.css'
import Alert from './Alert';
import Item from './Item';

function App() {

    const [item, setItem] = useState("");
    const [items, setItems] = useState(() => {
        const data = localStorage.getItem("items");
        return data !== null ? JSON.parse(localStorage.getItem("items")) : []
    });
    const [error, setError] = useState({ message: '', type: '' });
    const [editId, setEditId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (item === '') {
            setError({ message: "Please Enter Value", type: "danger" })
        }
        else {
            setItems([...items, { id: uuidv4(), value: item }]);
            localStorage.items = [...items];
            setError({
                message: "Item Added To The List", type: "success"
            })
            setItem("");
        }
    }

    const handleClear = () => {
        setItems([]);
        setError({ message: "Empty List", type: "danger" })
    }

    const handleClickEdit = (id) => {
        setEditId(id);
        setItem(items.find((e) => e.id === id).value)
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setItems([...items.map((e) => {
            if (e.id === editId)
                e.value = item;
            return e;
        })]);
        setItem("");
        setEditId("");
        setError({ message: "Value Changed", type: "success" })

    }

    const handleDelete = (id) => {
        setItems([...items.filter((e) => e.id !== id)]);
        setError({ message: "Item Removed", type: "danger" })
    }
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setError({ message: '', type: '' });
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [error])
    return (
        <Main>
            <GlobalStyle />
            <Conatiner>
                {(error.message && error.type) && <Alert type={error.type} message={error.message} />}
                <ContainerHeader>
                    Grocery Bud
                </ContainerHeader>
                <Form onSubmit={editId ? handleEdit : handleSubmit}>
                    <Input name="item" id="item" placeholder="e.g .eggs" value={item} onChange={(e) => setItem(e.target.value)} />
                    {editId ? <Button type="submit">Edit</Button> : <Button type="submit">Submit</Button>}
                </Form>
                {items.length !== 0 && <Items>
                    {items.map((e) => <Item key={e.id} {...e} handleClickEdit={handleClickEdit} handleDelete={handleDelete} />)}
                </Items>}
                <Clear type="button" onClick={handleClear}>Clear Items</Clear>
            </Conatiner>
        </Main>
    )

}
export default App