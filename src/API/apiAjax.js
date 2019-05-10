import React from 'react';
class ApiAjax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        this.GetFetch();
    }

    GetFetch() {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const persons = this.state.items.map((item, i) => (
            <div key = {i}>
                <h1>{item.name.first}</h1>
                <span>{item.cell}, {item.email}</span>
            </div>
        ));

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="layout-content" className="layout-content-wrapper">
                    <div className="panel-list">{persons}</div>
                </div>
            );
        }
    }
}
export default ApiAjax;