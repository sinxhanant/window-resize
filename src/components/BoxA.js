import React from 'react';
import { ResizableBox } from 'react-resizable';
import './BoxA.css';

function ResizableA() {
    // Initial dimensions of the resizable box
    const initialWidth = 300;
    const initialHeight = 200;


    // Handle resize event
    const onResize = (event, { size }) => {
        console.log('New size:', size);
        // You can perform additional actions on resize
    };

    return (
       
        <ResizableBox
            width={initialWidth}
            height={initialHeight}
            onResize={onResize}
            draggableOpts={{ grid: [1, 1] }}
            resizeHandles={['n', 's', 'e', 'w']}
            className="resizable-box"
            style={{ border: '1px solid #ddd' }}
        >
           
            <div className="resizable-content">
                Resizable Content
       
            </div>
        </ResizableBox>
    
    );
}

export default ResizableA;