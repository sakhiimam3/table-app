
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import data from './User.jsx';
import ResizableTable from './ResizableTable.jsx';
import "../App.css"

const Table = () => {

    const [User, setUser] = useState(data)
    const handleDragInput = (results) => {
        let temUser = [...User];
        let [selectrow] = temUser.splice(results.source.index, 1)
        temUser.splice(results.destination.index, 0, selectrow)
        setUser(temUser)
    }

    return (
        <>
 <div className="container mt-5 pt-5">
 <h1 className="text-center"> Table</h1>
                <DragDropContext onDragEnd={(results) => handleDragInput(results)}>
                    <ResizableTable resizable={true} resizeOptions={{}} >
                           
                        <Droppable droppableId="tbody">
                            {(provided) => (
                                <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                    {User.map((e, index) => {

                                        return (
                                            <Draggable draggableId={e.first} index={index} key={e.first}>
                                                {(provided) => (

                                                    <tr ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        <td>{e.first}</td>
                                                        <td>{e.last}</td>
                                                        <td>{e.age}</td>
                                                    </tr>


                                                )}
                              

                                            </Draggable>

                                        )          

                                    })}

                               
                                </tbody>
                           
                            )}
                       
                        </Droppable>
                       
                    </ResizableTable>
                </DragDropContext>


            </div>
        </>
    )
}

export default Table
