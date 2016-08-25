# ReactQuill

Quilljs in React. Based on `Quill 1.0`

<a href="https://www.npmjs.com/package/%2540djyde%2Freact-quill"><img src="https://img.shields.io/npm/dm/%40djyde%2Freact-quill.svg?style=flat-square" alt="NPM downloads"></a>

## Install

```bash
$ npm install @djyde/react-quill --save-dev
```

## Quick Start

```javascript
import React from 'react'
import ReactQuill from 'react-quill'

// import stylesheet
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

class Editor extends React.Component {

  render () {
    const options = {
      theme: 'snow'
    }

    function onChange (html) {
      console.log(html)
    }

    const events = {
      'text-change': delta => {
        console.log(delta)
      }
    }

    return (
      <div>
        <ReactQuill options={options} events={events} onChange={onChange} ref='editor'/>
      </div>
    )
  }
}

// render <Editor />
```

## API

### props

- onChange(html)

- options

An [options](http://quilljs.com/docs/configuration/) object

- events

An object contains [events](http://quilljs.com/docs/api/#events)

### methods

- getHTML()

Get the HTML

### members

- $quill

The quill instance

- $el

The quill element

# License

MIT License
