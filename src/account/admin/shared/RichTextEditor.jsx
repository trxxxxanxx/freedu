import React, { useState, useEffect, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { tokens } from "../../../theme";
import { Box, IconButton, Toolbar, useTheme } from "@mui/material";
// import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
// import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
// import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
// import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';

const RichTextEditor = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [text, setText] = useState('');
    const quillRef = useRef(null);
    const maxLength = 1500;

    // useEffect(() => {
    //     if (quillRef.current) {
    //         const quill = quillRef.current.getEditor();
    //         const toolbar = quill.getModule('toolbar');

    //         // Customize the undo and redo buttons
    //         const undoButton = toolbar.container.querySelector('.ql-undo');
    //         const redoButton = toolbar.container.querySelector('.ql-redo');

    //         undoButton.addEventListener('click', () => quill.history.undo());
    //         redoButton.addEventListener('click', () => quill.history.redo());

    //         // Customize the indent and outdent buttons
    //         const indentButton = toolbar.container.querySelector('.ql-indent');
    //         const outdentButton = toolbar.container.querySelector('.ql-outdent');

    //         indentButton.addEventListener('click', () => quill.format('indent', '+1'));
    //         outdentButton.addEventListener('click', () => quill.format('indent', '-1'));
    //     }
    // }, [quillRef]);

    // const Icons = {
    //     'undo': UndoRoundedIcon,
    //     'redo': RedoRoundedIcon,
    //     'list-ordered': FormatListNumberedIcon,
    //     'list-bullet': FormatListBulletedIcon,
    //     'indent': FormatIndentIncreaseIcon,
    //     'outdent': FormatIndentDecreaseIcon,
    // };

    const modules = {
        toolbar: {
            container: [
                // ['undo', 'redo'],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{'color': []}, {'background': []}],
                [{'font': []}],
                [{'align': []}],
                // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                // ['indent', 'outdent'],
                ['link', 'image', 'video'],
                ['clean'],
            ],
        },
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true,
        },
    };

    const formats = [
        // 'undo', 'redo',
        'header',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'font',
        'align',
        // 'list-ordered', 'list-bullet',
        // 'indent', 'outdent',
        'link', 'image', 'video',
        'clean',
    ];

    const handleChange = (value) => {
        if (value.length <= maxLength) {
            setText(value);
        }
    };

    return (
        <Box mt='20px'>
            <ReactQuill
                ref={quillRef}
                value={text}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                className="custom-rich-text-editor"
            />
            <p>Characters remaining: {maxLength - text.length}</p>
        </Box>
    );
};

export default RichTextEditor;
