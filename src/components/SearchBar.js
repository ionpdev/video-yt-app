import React from 'react'

class SearchBar extends React.Component {

    state = { term: '' } //searchTerm

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }
    onFormSubmit = event => {
        event.preventDefault()
        // TODO: make sure we call callback from parent compinent
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar