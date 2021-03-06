import { CapacitorProject } from '@capacitor/project';
import { CapacitorConfig } from '@capacitor/cli';

// This takes a CapacitorConfig, such as the one in capacitor.config.ts, but only needs a few properties
// to know where the ios and android projects are
const config: CapacitorConfig = {
  ios: {
    path: 'ios',
  },
  android: {
    path: 'android',
  },
};

const updateIosProject = async () => {

  const project = new CapacitorProject(config);
  await project.load();
  console.log(project);

  /* IOS */
  const appTarget = project.ios?.getAppTarget();
  project.ios.setBundleId(appTarget.name, null, 'com.mayvideo.myidff');

  /* Android */
  await project.android?.setPackageName('com.devdactic.awesome');

  await project.android?.setVersionName('1.0.2');
  await project.android?.setVersionCode(42);


  await project.vfs.commitAll();





  await project.commit();
};

updateIosProject();
