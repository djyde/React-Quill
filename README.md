# ReactQuill

Quilljs in React. Based on `Quill 1.0`

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

- $quill

The quill instance

- $el

The quill element

# License

MIT License
