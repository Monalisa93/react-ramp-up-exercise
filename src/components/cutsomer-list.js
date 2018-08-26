import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import customerActions from '../actions/index';
import { fetchCustomers } from '../actions/index';
import isEqual from 'lodash/isEqual';
import axios from 'axios';

const JSON = require('circular-json');


class CustomerList extends Component {

    state = {
        data: []
    };

    componentWillMount() {

        axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers')
            .then(res => {
                console.log((JSON.stringify(res)));
                this.setState({
                    data: res.data,
                })
            });

    }





    render() {

        let sortedData = JSON.parse(JSON.stringify(this.state.data));
        sortedData = JSON.parse(JSON.stringify(sortedData.map((list, i)=>{return{...list, hobbies:list.hobbies.sort()}})));

        console.log('SortedData :',sortedData);


        let hobbies = this.state.data.map((list,i)=> <tr>{list.hobbies.sort().toString()}</tr>);
        console.log('hobbies :',hobbies);

        const myArray = hobbies;
        const test = myArray.forEach((element, index, array) => {
            var hobbyitem = element.props.children;
            console.log('hobbyitem: ',hobbyitem)

            let isEquals = (a,b) => JSON.stringify(a) === JSON.stringify(b);
            console.log(isEquals(hobbyitem))

            //No hobbies are similar so console log false, fater matching the string

        });

        // let similarHobbies = hobbies.concat((arr, hobbies) => [...arr, ...hobbies],[])
        // console.log(similarHobbies);

        // hobbies.forEach(myFunc);
        //
        // function myFunc(item, index) {
        //     for (var key in item){
        //         console.log(item[key])
        //     }
        // }


        return(
           <table>
               <tr>
                   <th>List of all Hobbies</th>
               </tr>
               <td>{hobbies}</td>
           </table>
        )
    }
}



function mapStateToProps(state) {
    return{
        customers: state.customers
    }
}

// function mapDispatchToProps(dispatch) {
//
//     return {
//
//         actions: bindActionCreators(fetchCustomers, dispatch)
//
//     }
//
// }

// export default connect(mapStateToProps)(mapDispatchToProps)(CustomerList);

export default connect(mapStateToProps)(CustomerList);
