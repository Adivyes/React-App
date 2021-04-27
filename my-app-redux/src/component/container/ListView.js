import React from 'react';
import { List, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // return { ...state, item: state.list.items || []}
    }

function ListView(props) {
   
    const listItems = props.items || [];
    const listItemsJSX = listItems.map(item => <ListItemText key={item}>{item}</ListItemText>);
    
    return (
        <List>
            {listItemsJSX}
        </List>
    );
}

export default connect(
    mapStateToProps,
    null
    )(ListView);