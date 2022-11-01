function make_album(artistNameP, albumTitleP, numberOfTracks = 10){
    const album = {artistName:artistNameP, albumTitle:albumTitleP, noOfTracks:numberOfTracks}
    return album
}
console.log(make_album("Artist1", "Title1").artistName +" "+ make_album("Artist1", "Title1").albumTitle)
console.log(make_album("Artist2", "Title2").artistName +" "+ make_album("Artist2", "Title2").albumTitle)
console.log(make_album("Artist3", "Title3").artistName +" "+ make_album("Artist1", "Title3").albumTitle)

/*
object describing music ake_album
    artist name:
    Title: 
    return object (two values)
    three dictionaries
    represending three different ake_album
    print
    add additional parameter for number of number of tracks 
    one call as WEll 

*/