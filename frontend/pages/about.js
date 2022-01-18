import aboutStyles from "../styles/About.module.css";

import Head from "next/head";

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <Head>
        <title>O nama | Everest Nekretnine</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        {/* <div></div> */}
        <h1>O nama</h1>
      </div>
      <h1>Ko su Everest nekretnine?</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        venenatis sodales maximus. Sed ut augue id lorem aliquam posuere id ut
        urna. Proin non mollis dui, at auctor neque. Suspendisse cursus ex at
        iaculis faucibus. Vestibulum eu sapien dignissim, iaculis risus sed,
        tristique turpis. Vivamus consectetur felis neque, at volutpat erat
        aliquam non. Fusce eu rhoncus risus, id molestie dui. Nulla vitae libero
        vel odio gravida sagittis. Vestibulum cursus tempus erat a sollicitudin.
        Donec aliquet sapien elit, ut finibus libero vestibulum eu. Morbi leo
        quam, vulputate eget felis in, semper lacinia urna. Praesent efficitur
        libero eget sapien tristique porttitor. Fusce ac leo tincidunt, luctus
        enim eu, pretium neque. Cras semper orci mollis magna vehicula
        ullamcorper. Suspendisse ornare nec nisl vel efficitur. Integer metus
        lectus, malesuada eu orci id, hendrerit congue mi. Duis faucibus eget
        metus eget ultricies. Fusce tristique odio sit amet diam dapibus, a
        bibendum dui dapibus. Suspendisse pharetra sagittis enim, eu
        pellentesque quam rutrum quis. Donec consectetur eleifend lorem ut
        cursus. Etiam vel tincidunt lorem. Morbi lacinia purus sit amet leo
        faucibus luctus. Aliquam fermentum felis ac ipsum sodales molestie. Ut
        volutpat convallis erat. Phasellus dignissim, mauris ac dignissim
        sodales, nibh nisl dignissim mi, vel aliquet nibh dolor id libero.
        Phasellus dapibus libero nec nisl tincidunt, varius cursus urna
        condimentum. Nunc malesuada metus id lectus sollicitudin cursus eu ac
        tortor. Maecenas consectetur condimentum nunc eget iaculis. Aliquam
        consequat augue at ipsum placerat ultricies. Aenean sit amet urna a
        velit placerat volutpat ac at turpis. Phasellus lobortis quam metus,
        quis porta quam hendrerit eget. Nam eget cursus tellus, non sagittis
        massa.
      </div>
      <div></div>
    </div>
  );
};

export default About;
