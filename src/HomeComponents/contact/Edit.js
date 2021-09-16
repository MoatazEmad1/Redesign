import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import {ContactContainer,Wraper,WraperHeader,Button} from '../../styles/Contact.styles'
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
function Edit({title,setcontacInfo}) {
    const [editorState,setEditorState]=useState(EditorState.createEmpty())
    const EditorStateChange=(editorState)=>{
        setEditorState(editorState);
    }
    const dispatch=useDispatch()
   console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
   const handelContent=()=>{
    setcontacInfo(draftToHtml(convertToRaw(editorState.getCurrentContent())))
   }
    return (
        <ContactContainer>
            <span id='HeaderTitle'>Edit</span>
            <Wraper>
            <WraperHeader>
            <div className='Editbtn'>
                  <Button bg='#4ECAA5' onClick={()=>{
                      handelContent()
                      dispatch(SetNewHomeState('Contact'))
                      }}>Save</Button>
                  <Button bg='#FF666A' onClick={()=>{
                     
                      dispatch(SetNewHomeState('Contact'))
                      }}>Cancel</Button>
               </div>
            </WraperHeader>
                <div className='Title'>
                    <label>Title slug</label>
                    <input disabled placeholder={title}/>
                </div>

                <div className='Description'>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={EditorStateChange}
                    />;
                </div>
            </Wraper>

        </ContactContainer>
    )
}

export default Edit
