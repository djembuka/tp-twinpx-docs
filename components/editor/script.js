window.addEventListener('load', () => {
  const editor = new EditorJS({
    holder: 'editorjs',
    tools: {
      header: Header,
      image: SimpleImage,
      list: {
        class: List,
        inlineToolbar: true,
        config: {
          defaultStyle: 'unordered',
        },
      },
    },
  });

  document
    .querySelector('#editorjsSubmit button')
    .addEventListener('click', (e) => {
      e.preventDefault();
      editor
        .save()
        .then((outputData) => {
          console.log('Article data: ', outputData);
        })
        .catch((error) => {
          console.log('Saving failed: ', error);
        });
    });
});
