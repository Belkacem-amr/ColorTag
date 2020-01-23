export async function getColor(){

    const url = 'https://api.sightengine.com//1.0/check.json?&url=https://sightengine.com/assets/img/examples/example-prop-c1.jpg&api_user=147219924&api_secret=BwuQvTnsHZPxSQpj4LzQ&models=properties'

    return fetch(url)
    .then (( response) => response.json())
    .catch (( error) => console.log(error))
}