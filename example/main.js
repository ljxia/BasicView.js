function Main()
{
	//instance member
	this.cube;
}
Main.prototype = new BasicView(/*config*/);

//------------------------------------------------------------
Main.prototype.setup = function()
{
	//add light
	var light = new THREE.PointLight(0xffffff, 1, 2000);
	light.position.set(0, 0, 200);
	this.scene.add(light);

	//add cube
	this.cube = new THREE.Mesh(
		new THREE.CubeGeometry(100, 100, 100),
		new THREE.MeshLambertMaterial({ color: 0xffffff, shading : THREE.FlatShading })
	);
	this.scene.add(this.cube);
};

//------------------------------------------------------------
Main.prototype.update = function()
{
	//update camera
	this.camera.position.x += ( (this.mouseX / this.screenWidth  - 0.5) * 200 - this.camera.position.x) * 0.1;
	this.camera.position.y += (-(this.mouseY / this.screenHeight - 0.5) * 200 - this.camera.position.y) * 0.1;
	this.camera.lookAt(this.scene.position);

	//update cube
	this.cube.rotation.x += 0.01;
	this.cube.rotation.y += 0.02;
};

//------------------------------------------------------------
Main.prototype.draw = function()
{
	//render scene
	this.renderer.render(this.scene, this.camera);
};

//------------------------------------------------------------
Main.prototype.exit = function()
{
};

//------------------------------------------------------------
Main.prototype.onMouseDown = function()
{
};

//------------------------------------------------------------
Main.prototype.onMouseUp = function()
{
};

//------------------------------------------------------------
Main.prototype.onMouseMove = function()
{
};

//------------------------------------------------------------
Main.prototype.onMouseDragged = function()
{
};

//------------------------------------------------------------
Main.prototype.onKeyDown = function(keyCode)
{
};

//------------------------------------------------------------
Main.prototype.onKeyUp = function(keyCode)
{
};

//------------------------------------------------------------
Main.prototype.onResize = function()
{
};