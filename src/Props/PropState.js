import React, { Component } from 'react';
class PropState extends Component {
    constructor(props) {
        super(props);
        this.state = {
           header: "Header from props...",
           content: "Content from props..."
        }
     }
    render() {
        return (
            <div>
                <Header headerProp = {this.state.header}/>
                <Content contentProp = {this.state.content}/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.headerProp} </h1>
            </div>
        )
    }
}

class Content extends Component {
    constructor(){
        super();
        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                 },
                 {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                 },
                 {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                 }
            ]
        }
    }
    render() {
        return(
            <div>
                <h2> {this.props.contentProp} </h2>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i}
                            data = {person} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}
export default PropState;