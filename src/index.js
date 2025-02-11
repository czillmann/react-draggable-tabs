import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import Tab from './Tab';
import './style.css'
import './palette.css'
import { DndProvider } from "react-dnd";

class Tabs extends Component {
    render() {
        const { tabs } = this.props;
        return (
            <DndProvider backend={HTML5Backend}>
                <div className="react-tabs-container">
                    {tabs.map((tab, i) => (
                        <Tab
                            key={tab.id}
                            index={i}
                            id={tab.id}
                            content={tab.content}
                            moveTab={this.props.moveTab}
                            selectTab={this.props.selectTab}
                            singleTab={tabs.length === 2}
                            closeTab={this.props.closeTab}
                            active={tab.active}
                        />
                    ))}
                    <div className="react-tabs-child">
                        {React.Children.toArray(this.props.children)}
                    </div>
                </div>
            </DndProvider>
        );
    }
}

export default Tabs
