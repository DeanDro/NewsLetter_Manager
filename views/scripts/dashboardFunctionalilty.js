'use strict'

//Left menu descriptions for each button
const download_data = document.getElementById('download_data')
const publish_img  = document.getElementById('publish_link')
const templates_img = document.getElementById('templates')
const downlaod_images = document.getElementById('download_images_link')

download_data.addEventListener('mouseover', ()=>{
    document.getElementById('download_data').src = '../assets/image_descriptions/upload_content.png'
})

download_data.addEventListener('mouseout', ()=>{
    document.getElementById('download_data').src = '../assets/upload_cloud.png'
})

publish_img.addEventListener('mouseover', ()=>{
    document.getElementById('publish_img').src = '../assets/image_descriptions/publish.png'
})

publish_img.addEventListener('mouseout', ()=>{
    document.getElementById('publish_img').src = '../assets/small_send_mail.png'
})

templates_img.addEventListener('mouseover', ()=>{
    document.getElementById('img_templates').src = '../assets/image_descriptions/templates.png'
})

templates_img.addEventListener('mouseout', ()=>{
    document.getElementById('img_templates').src = '../assets/template_icon.png'
})

downlaod_images.addEventListener('mouseover', ()=>{
    document.getElementById('download_photos').src = '../assets/image_descriptions/download_images.png'
})

downlaod_images.addEventListener('mouseout', ()=>{
    document.getElementById('download_photos').src = '../assets/images_folder.png'
})


//Functionality code

