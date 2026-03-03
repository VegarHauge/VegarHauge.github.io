import styles from './About.module.css'

const SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Python', 'Next.js', 'SQL', 'Docker',
  'Git', 'REST APIs', 'CI/CD', 'AI', 'ML'
]

const STATS = [
  { value: '3+', label: 'Years experience' },
  { value: '20+', label: 'Projects shipped' },
  { value: '10+', label: 'Happy clients' },
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <p className="section-label">About me</p>

        <div className={styles.grid}>
          {/* Text column */}
          <div className={styles.textCol}>
            <h2 className="section-heading">
              Passionate about building<br />
              <span className={styles.highlight}>things that matter</span>
            </h2>

            <p className={styles.bio}>
              Hi! I&apos;m Vegar, a master student at the University of Stavanger, 
              specializing in Data Science. With a strong foundation in software development
               and a passion for creating impactful solutions, 
               I&apos;ve spent the last few years honing my skills in full-stack development and data science. 
               I thrive on tackling complex problems and turning ideas into reality through code.
            </p>
            <p className={styles.bio}>
              When I&apos;m not coding, you&apos;ll find me on my bike or playing any kind of sport that includes a ball. 
              During the winter i like to explore the backcountry with my skis or cruising at the ski resort.
              On a rainy day, I might be found playing video games with my friends.
              I&apos;m always eager to connect with like-minded individuals, 
              so feel free to reach out if you want to chat about tech, data science, or anything in between!
            </p>

          </div>

          {/* Skills column */}
          <div className={styles.skillsCol}>
            <div className={styles.skillsCard}>
              <p className={styles.skillsTitle}>Tech I work with</p>
              <div className={styles.skillsGrid}>
                {SKILLS.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
