function App()
{
	//instance member
	this.cube;
}
App.prototype = new ALUMICAN.BasicView("Canvas");

//------------------------------------------------------------
App.prototype.setup = function()
{
	//add light
	var light = new THREE.PointLight(0xffffff, 1, 3000);
	light.position.set(0, 0, 1000);
	this.scene.add(light);

	//add cube
	this.cube = new THREE.Mesh(
		new THREE.CubeGeometry(500, 500, 500),
		new THREE.MeshLambertMaterial({ color: 0xffffff, shading : THREE.FlatShading })
	);
	this.scene.add(this.cube);
};

//------------------------------------------------------------
App.prototype.update = function()
{
	//update camera
	this.camera.position.x += ( (this.mouseX / this.viewportWidth  - 0.5) * 2000 - this.camera.position.x) * 0.1;
	this.camera.position.y += (-(this.mouseY / this.viewportHeight - 0.5) * 2000 - this.camera.position.y) * 0.1;
	this.camera.lookAt(this.scene.position);

	//update cube
	this.cube.rotation.x += 0.01;
	this.cube.rotation.y += 0.02;
};

//------------------------------------------------------------
App.prototype.draw = function()
{
	//render scene
	this.renderer.render(this.scene, this.camera);
};

//------------------------------------------------------------
App.prototype.exit = function()
{
};

//------------------------------------------------------------
App.prototype.onMouseDown = function(event)
{
};

//------------------------------------------------------------
App.prototype.onMouseUp = function(event)
{
};

//------------------------------------------------------------
App.prototype.onMouseMove = function(event)
{
};

//------------------------------------------------------------
App.prototype.onMouseDragged = function(event)
{
	console.log(event.type);
};

//------------------------------------------------------------
App.prototype.onKeyDown = function(keyCode, event)
{
};

//------------------------------------------------------------
App.prototype.onKeyUp = function(keyCode, event)
{
};

//------------------------------------------------------------
App.prototype.onResize = function(event)
{
};