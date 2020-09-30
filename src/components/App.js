import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideList from './VideList'
import VideDetail from './VideoDetail'

class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        // this fill the empty page on load
        this.onTermSubmit('react and redux')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState( {
            videos: response.data.items,
            // change the default video on search
            selectedVideo: response.data.items[0] 
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar 
                    onFormSubmit={this.onTermSubmit} 
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideDetail 
                                video={this.state.selectedVideo} 
                            />
                        </div>
                        <div className="five wide column">
                            <VideList 
                                onVideoSelect={this.onVideoSelect}  
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default App