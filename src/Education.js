import React, {Component} from 'react';

class Education extends Component {
    
    render() {
        const degrees=this.props.education;
        const degreeItems=degrees.map((degree)=>
            <tr key={degree.id.toString()}>
                <td>
                {degree.duration}
                </td>
                <td>
                {degree.level}
                </td>
                <td>
                {degree.institution}
                </td>
            </tr>
            
        );
        return (
            <div>
                <h2>Education</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Duration</th>
                        <th>Level</th>
                        <th>Institution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {degreeItems}
                                            </tbody>
                </table>
                
            </div>
        );
    }
}

export default Education;