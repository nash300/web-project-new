/*
======================================================================================
- This is a static page which is directly rendered to the "DisplaySection". 
- The rendering happens when user clicks on the "Features" button in the navigation menu.
======================================================================================
*/

const FeaturesPage = (
  <div className="NavBarPage" key={"features"}>
    <h2>Current Version</h2>

    <ul>
      <li>
        <b>Dynamic User Profiles:</b>
        <br />
        Teach and Learn offers dynamic user profiles that allow students and
        teachers to showcase their expertise, interests, and educational goals.
        With customizable profiles, users can provide detailed information about
        their academic background, areas of expertise, preferred learning
        methods, and availability, enabling seamless matchmaking based on
        compatible learning preferences.
      </li>
      <br />
      <li>
        <b>Flexible Matching System:</b>
        <br />
        Our platform employs a flexible matching system that connects students
        with suitable teachers based on a variety of criteria, including subject
        expertise, teaching style, availability, and geographical location.
        Whether you're seeking a one-on-one tutoring session or a group study
        session, our matching algorithm ensures that you find the perfect
        learning partner to meet your unique needs.
      </li>
      <br />
      <li>
        <b>Mobile Compatibility:</b>
        <br />
        Teach and Learn is fully optimized for mobile devices, allowing users to
        access the platform anytime, anywhere, from their smartphones or
        tablets. Whether you're on the go or prefer to study from the comfort of
        your own home, our mobile-friendly interface ensures a seamless learning
        experience across all devices.
      </li>
    </ul>
    <h2>Upcomming Version</h2>
    <ul>
      <li>
        <b>Virtual Classrooms:</b> With our virtual classroom feature, students
        and teachers can engage in interactive online learning sessions from
        anywhere in the world. Our virtual classrooms are equipped with a suite
        of multimedia tools, including video conferencing, screen sharing,
        interactive whiteboards, and chat functionality, providing an immersive
        learning environment that replicates the experience of a traditional
        classroom setting.
      </li>
      <br />
      <li>
        <b>Collaborative Study Groups:</b> Teach and Learn facilitates
        collaborative learning through the creation of study groups, where
        students can join forces with peers to tackle challenging topics, review
        course materials, and prepare for exams together. Our platform allows
        users to create and join study groups based on shared interests or
        academic goals, fostering a supportive community of learners who can
        motivate and inspire one another to succeed.
      </li>
      <br />
    </ul>
    <ul>And much more ...</ul>
  </div>
);

export default FeaturesPage;
