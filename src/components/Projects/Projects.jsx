import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Projects.module.css'
import { SITE } from '../../config/site'

const PROJECTS = [
  {
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80',
    title: 'MOBILIO',
    summary:
      'A full-stack e-commerce solution built with React, Stripe, and PostgreSQL. Features real-time inventory, order tracking, and an admin dashboard. Has a ML powered reccomendation system, that reccomends products based on similarity and co-purchasing patterns. Working cloud setup with google kubernetes engine.',
    tags: ['React', 'Python', 'SQL', 'Docker','Kubernetes', 'ML',],
    links: [
      { label: 'GitHub', href: SITE.github, type: 'github' },
      { label: 'Live demo', href: '#', type: 'demo' },
    ],
  },
   {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'Spark Pipeline',
    summary:
      'A scalable data processing pipeline built with Apache Spark that follows the medallion architecture for NY Yellow Taxi trip data. It includes a PySpark ETL workflow, data quality checks, and integration with OpenStack. Specialliced in checking performance of different cluster configuration',
    tags: ['Spark', 'Python', 'OpenStack', 'PySpark'],
    links: [
      { label: 'GitHub', href: SITE.github, type: 'github' },
      { label: 'Watch demo', href: '#', type: 'youtube' },
    ],
  },
    {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'S K I M A N I A',
    summary:
      'A fullstack E-Commerce website for ski equipment, built with Vue.js, Python, SQLite, and Docker. It features a user-friendly interface for browsing and purchasing ski gear, an admin dashboard for managing inventory, orders and with an advanced analytics dashboard. A secure authentication system. The project is containerized with Docker for easy deployment.',
    tags: ['Vue', 'Python', 'SQLite', 'Docker'],
    links: [
      { label: 'GitHub', href: SITE.github, type: 'github' },
      { label: 'Watch demo', href: '#', type: 'youtube' },
    ],
  },
    {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'Campus Eats',
    summary:
      'A Foodora clone for the University of Stavanger, built with C#, Razor Pages, SQLite, and Docker. Features threes different user roles, customer, courier and admin. Customers can browse and order food from campus restaurants, couriers can accept deliveries, and admins can oversee the entire operation. Has an automatic email system that notifies users of order status changes. Stripe integration for payments.',
    tags: ['C#', 'Docker', 'Razor Pages', 'SQLite'],
    links: [
      { label: 'GitHub', href: SITE.github, type: 'github' },
      { label: 'Watch demo', href: '#', type: 'youtube' },
    ],
  },
{
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'Retro Game Pi',
    summary:
      'A desktop app that runs on the raspberry pi, that turns it into a retro gaming console. Built with Rust and React. The app features a sleek UI for browsing and launching games, and supports a wide range of retro game emulators.  ',
    tags: ['Raspberry Pi', 'Rust', 'React'],
    links: [
      { label: 'GitHub', href: SITE.github, type: 'github' },
      { label: 'Watch demo', href: '#', type: 'youtube' },
    ],
  },
    {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    title: 'TITLE',
    summary:
      'SUMMARY',
    tags: ['Technology1', 'Technology2', 'Technology3'],
    links: [
      { label: 'GitHub', href: SITE.github, type: 'github' },
      { label: 'Watch demo', href: '#', type: 'youtube' },
    ],
  },

]

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <p className="section-label">My work</p>
        <h2 className="section-heading">
          Featured <span className={styles.accent}>projects</span>
        </h2>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className={styles.more}>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className={styles.moreBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
