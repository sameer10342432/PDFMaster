'use client';

import { useEffect, useRef } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const quillRef = useRef<any>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && editorRef.current && !quillRef.current) {
      import('react-quill').then((module) => {
        const ReactQuill = module.default;
        const Quill = ReactQuill.Quill;

        const toolbarOptions = [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ align: [] }],
          ['link', 'image', 'video'],
          ['clean'],
        ];

        import('react-quill/dist/quill.snow.css');

        const QuillEditor = (
          <ReactQuill
            ref={(el: any) => {
              quillRef.current = el;
            }}
            theme="snow"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            modules={{
              toolbar: toolbarOptions,
            }}
            style={{ height: '400px', marginBottom: '50px' }}
          />
        );

        import('react-dom/client').then(({ createRoot }) => {
          if (editorRef.current) {
            const root = createRoot(editorRef.current);
            root.render(QuillEditor);
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      if (editor && editor.root.innerHTML !== value) {
        editor.root.innerHTML = value;
      }
    }
  }, [value]);

  return <div ref={editorRef} className="rich-text-editor" />;
}
