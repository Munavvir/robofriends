import { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const robots=this.props.robots;
        return (
            <div>
                {
                    robots.map((user, i) => {
                        return (
                            <Card
                                id={robots[i].id}
                                name={robots[i].name}
                                email={robots[i].email}
                            />
                        );
                    }
                    )
                }
            </div>
        );
    }
}

export default CardList;