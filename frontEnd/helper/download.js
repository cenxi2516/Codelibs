function download (path, filename) {
  const a = document.createElement('a')
  a.href = `${path}/${filename}`
  a.download = true
  a.target = '_blank'
  a.click()
}

export default download
