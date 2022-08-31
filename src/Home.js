import React, {Component} from 'react';
import {Table} from 'react-bootstrap';


import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddModal} from './AddModal';
import {EditModal} from './EditModal';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    
    //delete department
    deleteDep(depid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'department/'+depid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        //declare variables 
        const {deps, depid,depname} = this.state;
        //to close the modal
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        
        return(
            <div className="home">
                <div className="workouts">
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Department Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deps.map(dep=>
                                <tr key={dep.DepartmentId}>
                                    <td>{dep.DepartmentName}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,
                                                depid:dep.DepartmentId,depname:dep.DepartmentName})}>
                                                    Edit
                                                </Button>

                                                <Button className="mr-2" variant="danger" onClick={()=>this.deleteDep(dep.DepartmentId)}>
                                                    Delete
                                                </Button>

                                                <EditModal show={this.state.editModalShow} onHide={editModalClose} depid={depid} depname={depname} />
                                        </ButtonToolbar>
                                    </td>
                                </tr>    
                            )}
                        </tbody>
                    </Table>

                    <ButtonToolbar>
                        <Button variant='primary'onClick={()=>this.setState({addModalShow:true})}>
                            Add Department
                        </Button>

                        <AddModal show={this.state.addModalShow} onHide={addModalClose} />
                    </ButtonToolbar>
                    
                </div>
            </div>
        )
    }
}

export default Home