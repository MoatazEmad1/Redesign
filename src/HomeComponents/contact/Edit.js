import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import {ContactContainer,Wraper,WraperHeader,Button} from '../../styles/Contact.styles'
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import {useDispatch} from 'react-redux'
import {SetNewHomeState} from '../../Redux/Actions/HomeActionCreator'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from "react-ckeditor-component";
function Edit({title,setcontacInfo}) {
    const [editorState,setEditorState]=useState('')
    const EditorStateChange=(evt)=>{
        setEditorState(evt.editor.getData());
    }
    const dispatch=useDispatch()
   const handelContent=()=>{
    setcontacInfo(editorState)
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
              <CKEditor events={{"change": EditorStateChange}} content={editorState}  name={'description'} />
                </div>
            </Wraper>

        </ContactContainer>
    )
}

export default Edit
