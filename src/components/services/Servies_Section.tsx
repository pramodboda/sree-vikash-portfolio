import React, { FC } from "react";
import FlowingMenu from '../animations/FlowingMenu';

const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }

const ServicesSection: React.FC = () => {
    return (<>
        <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
        </div>
    </>)
}
export default ServicesSection;
