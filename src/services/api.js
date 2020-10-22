import axios from 'axios'

export default axios.create({
    baseURL: "http://904293a8cb5c.ngrok.io",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdm9AZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZWNyZXRvIiwiaWF0IjoxNjAzMzcyODY0LCJleHAiOjE2MDMzOTA4NjR9.BuhfjxBfYEr6ZIcl3aAxNzDRSEMab4H1h1yc0znrtsM"
    }
});

