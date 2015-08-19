

var client;
var samlClient;
var appkey = "5f59845d5630b80ad4b1f0a0fa008f81";
var appsecret = "524df3c0faa1176f36975ec8488f1a3b";
var serviceUrl = "https://100002700.auth.konycloud.com/appconfig";
var samlProviderName = "SAMLDemo";

function init(){
	client = new kony.sdk();
	client.init(appkey,appsecret,serviceUrl,function(response){
		alert("Init success");
	},function(error){
		alert("Init failure");
	});
}

function doSAMLLogin(){
 	samlClient = client.getIdentityService(samlProviderName);
 	samlClient.login({},
 		function(response){
 			alert("Login success");
 		},function(error){
 			alert("Login failure");
 		}
 	);
}

function getBackendtoken(){
	samlClient.getBackendToken(false,{},
		function(response){
			alert("Backend token is "+JSON.stringify(response));
		},
		function(error){
			alert("Failed to fetch backend token");
		}
	);
}