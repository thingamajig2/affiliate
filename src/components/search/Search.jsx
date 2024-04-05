import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../features/shop/shopSlice';
import './search.scss';

const Search = () => {

    const dispatch = useDispatch();
    const [value,setValue] = useState('');
    
    const filmList = (e) =>{
        setValue(e.target.value);
    }

    useEffect(() => {
        let t = setTimeout(() => {
            dispatch(searchProducts((value)));
        }, 500);
        return(()=>clearTimeout(t));
    },[dispatch, value]) 


    return(
        <div className = 'searchIcon'>
            <input type='search' className = 'search' value={value} onChange={filmList} />
        </div>
    )
}
export default Search;