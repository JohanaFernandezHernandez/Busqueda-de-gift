import { useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (onNewValue) => {
        if( categories.includes(onNewValue)) return;

        // console.log(onNewValue)
        setCategories([ onNewValue,...categories ])
    }

    return (
        <>

        <h1>GitExpertApp</h1>

        <AddCategory 
        onNewValue={ onAddCategory }

        />

        { categories.map((category) =>  (
                <GifGrid 
                    key= { category }
                    category = { category }
                />
            )
        ) }


        </>
    )
}