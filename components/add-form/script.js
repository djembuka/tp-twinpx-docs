window.addEventListener('load', () => {
  if (!window.EditorJS) return;

  const editorElementId = 'editorjs';
  const editorElement = document.getElementById(editorElementId);
  const editorButtonElementWrapper = document.querySelector('.add-form-button');
  let controller,
    saveTimeout = 10000, //10s
    fetchTimeout = 20000; //20s

  const editor = new EditorJS({
    holder: editorElementId,
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
      code: CodeTool,
    },
  });

  editor.isReady
    .then(() => {
      document
        .querySelector('#editorjsSubmit button')
        .addEventListener('click', (e) => {
          e.preventDefault();
          saveEditor();
        });

      let saveIntervalId = setInterval(() => {
        saveEditor();
      }, saveTimeout);

      saveEditor();
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });

  function saveEditor() {
    editor
      .save()
      .then(async (outputData) => {
        if (controller) {
          controller.abort();
        }

        let formData = new FormData(),
          response,
          result;

        controller = new AbortController();
        formData.set('article', outputData);

        setTimeout(() => {
          if (!response) {
            controller.abort();
          }
        }, fetchTimeout);

        try {
          response = await fetch(
            editorElement.getAttribute('data-url') /*,
              {
                method: 'POST',
                body: formData,
                signal: controller.signal,
              }*/
          );

          result = await response.json();

          if (result && typeof result === 'object') {
            if (result.status === 'success' && result.data) {
              editorButtonElementWrapper.querySelector(
                'div'
              ).innerHTML = `Сохранено ${result.data.time}`;
            } else if (result.errors) {
              console.log(result.errors[0].message);
            }
          }
        } catch (err) {
          throw err;
        }
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }
});
