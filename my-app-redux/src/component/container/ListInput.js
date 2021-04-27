import React, {useState} from 'react'
import {Button, TextField} from '@material-ui/core'
import { addItem } from '../../actions';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => ({
    addToList: (item) => dispatch(addItem(item))
    })

function ListInput(props) {
const [item, setItem] = useState('')

function changeHandler(e) {
    setItem(e.target.value);
    };
    function clickHandler() {
        props.addToList(item);
    };

    return (
        <div>
            <h1>{item}</h1>
            <TextField onChange={changeHandler}/>
            
            <Button onClick={clickHandler}>Insert item to list</Button>
        </div>
    )
}
export default connect(null,mapDispatchToProps)(ListInput)
