const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let videos = [];
let downloadedVideos = [];

console.log(" !!!   WELCOME TO VIDEO MANAGEMENT SYSTEM    !!!");

function showMenu() {
    console.log("PRESS key 1 for video Uploading");
    console.log("PRESS key 2 for video downloading");
    console.log("PRESS key 3 for video history");
    console.log("PRESS key 4 to exit");

    reader.question("please enter the key: ", key => {
        console.log("----------------------------------------");
        if (key == 1) {
            console.log("YOU WANT TO UPLOAD VIDEO : ");
            reader.question("please enter the video name: ", name => {
                reader.question("please enter video size: ", size => {
                    videos.push({ name: name, size: size });
                    console.log("Successfully uploaded");
                    console.log("Current video list:", videos);
                    showMenu();  
                });
            });


           
        }
        
        else if (key == 2) {
            console.log("YOU WANT TO DOWNLOAD THE VIDEO : ");
            
            if (videos.length > 0) {
                console.log("Video list:");
                videos.forEach((video, index) => {
                    console.log(`${index}: ${video.name} (${video.size})`);
                });
                reader.question("please enter the video index: ", index => {
                    const videoIndex = parseInt(index, 10);
                    if (videoIndex >= 0 && videoIndex < videos.length) {
                        const selectedVideo = videos[videoIndex];
                        downloadedVideos.push(selectedVideo);
                        console.log(`Downloading Video: ${selectedVideo.name} (${selectedVideo.size})`);
                    } else {
                        console.log("Invalid video index.");
                    }
                    showMenu();  
                });
            } else {
                console.log("No videos available to download.");
                showMenu();  
            }
           
        }
      
        else if (key == 3) {
            console.log("VIDEO HISTORY : ");
            if (videos.length > 0) {
                console.log("Uploaded Videos:");
                videos.forEach((video, index) => {
                    console.log(`${index}: ${video.name} (${video.size})`);
                });
            } else {
                console.log("No videos available in uploaded history.");
            }

            if (downloadedVideos.length > 0) {
                console.log("Downloaded Videos:");
                downloadedVideos.forEach((video, index) => {
                    console.log(`${index}: ${video.name} (${video.size})`);
                });
            } else {
                console.log("No videos available in downloaded history.");
            }
            showMenu();  
           
        } 
       else if (key == 4) {
            console.log("Exiting the system. Goodbye!");
            reader.close();
        } else {
            console.log("Invalid key. Please enter 1, 2, 3, or 4.");
            showMenu(); 
        }
    });
}

showMenu();
