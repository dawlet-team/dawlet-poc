const { execSync } = require("child_process")

const run = (cmd, cwd) => execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
const getPlatform = () => {
	switch (process.platform) {
		case "darwin":
			return "mac";
		case "win32":
			return "windows";
		default:
			return "linux";
	}
};

const platform = getPlatform()
console.log(`creating distribution for ${platform}`)

if (platform === 'mac') {
  console.log(process.env.MAC_CSC_LINK)
}
if (platform === 'windows') {
  throw new Error('not supported yet') // TODO
}
if (platform === 'linux') {
  throw new Error('not supported yet') // TODO
}