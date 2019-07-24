const video = document.getElementById('video')

//Loading the Model Data
const MODEL_URL = '/weights'

await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
await faceapi.loadFaceLandmarkModel(MODEL_URL)
await faceapi.loadFaceRecognitionModel(MODEL_URL)

//Receive a Full Description for all Faces from an Input Image
const input = document.getElementById('imageUpload')
let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()

//original image size you can simply resize them
fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions)

//visualize the detection results by drawing the bounding boxes into a canvas:
faceapi.draw.drawDetections(canvas, fullFaceDescriptions)