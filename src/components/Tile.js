import React from 'react'

class Tile extends React.Component {

    state = {
        showDetails: false
    }

    displayDetails = () => {
        this.setState({showDetails: !this.state.showDetails})
    }

    details = () => {
        return(
            <div>
                <p>{this.props.hog.specialty}</p>
                <p>{this.props.hog["highest medal achieved"]}</p>
                <p>{this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
            </div>
        )
    }

	render(){
		return (
            <div className="ui cards ui four wide column" onClick={this.displayDetails}>
                <div className="image">
                    <img src={this.props.hog.image}/>
                </div>
                <div className="content">
                    <h3 className="header">{this.props.hog.name}</h3>
                </div>
                <div>
                    {this.state.showDetails ? this.details() : null}
                </div>
          </div>
		)
	}
}

export default Tile
