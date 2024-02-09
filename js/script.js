window.addEventListener('DOMContentLoaded', () => {
  const elPostContent = document.querySelector('.posts')

  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
  // Method GET
  fetch(BASE_URL, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }).then(response => {
    return response.json()
  }).then(data => {
    elPostContent.innerHTML = ''
    data.forEach((element, index) => {
      const div = document.createElement('div')
      div.innerHTML = `
        <div class="post">
          <h4> <b>#${index + 1}.</b> ${element.title}</h4>
          <p>${element.body}</p>
        </div>
      `
      elPostContent.append(div)
    });
  })

  // METHOD POST
  const form = document.querySelector('form')
  form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const formData = new FormData(form)
    const object = {}
    formData.forEach((value, key) => {
      object[key] = value
    })

    const json = JSON.stringify(object)
    fetch(BASE_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: json,
    })
      .then(res => res.json())
      .then(data => {
        form.reset()
        const div = document.createElement('div')
        div.innerHTML = `
          <div class="post">
            <h4> <b>#${data.id}.</b> ${data.title}</h4>
            <p>${data.body}</p>
          </div>
        `
        elPostContent.append(div)
      })
      .catch(err => console.log(err))
      .finally(console.log('Element successfully created'))
  })
})