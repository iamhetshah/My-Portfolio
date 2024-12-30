import { Component } from '@angular/core';
import AppConstants from '../../app.constants';
import { ProjectCardComponent } from '../project-card/project-card.component';
import ProjectModel from '../../models/project.model';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, SectionHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  protected social = AppConstants.social;
  protected projects: ProjectModel[] = [
    {
      name: 'Database Importer',
      description:
        'Developed a multithreaded Java tool for efficient CSV to database migration. Automates data type detection, streamlining the conversion process. Enables parallel processing for faster handling of large datasets.',
      start_date: new Date(new Date().setFullYear(2023, 9, 1)),
      end_date: new Date(new Date().setFullYear(2023, 9, 30)),
      github_link: 'https://github.com/iamhetshah/Database-Importer',
      skills: ['Java', 'Multithreading', 'JDBC'],
      motivation:
        'CSV files are comma-separated values and are easy to read and write. I wanted to find a way to populate a database from CSV files without manual entry, and the process had to be quick and efficient. This project was also my college 2nd-semester submission, and while most of my peers were creating traditional legacy management systems, I wanted to do something unique. This motivated me to build a tool that could automate and streamline the process of migrating large datasets into a database.',
      solves:
        'The tool solves the problem of manual and slow CSV-to-database migration by automating the process and enabling parallel processing for faster handling of large files. It’s a valuable utility for data migration tasks.',
    },
    {
      name: 'Image Compression and Edge Detection using QuadTree',
      description:
        'Developed image compression program utilizing Quadtree data structures. Achieves lossy compression by efficiently representing areas of uniform color with average values. Optimizes images with large regions of similar colors, reducing file size while balancing compression ratio and image quality.',
      start_date: new Date('2023-08-01'),
      end_date: new Date('2023-08-31'),
      github_link:
        'https://github.com/iamhetshah/Image-Compression-With-Quadtree',
      hosted_link: undefined,
      skills: ['Java', 'Data Structures', 'Image Processing'],
      motivation:
        "I was learning how JPEG works and had to build a project for my college's 1st-year Data Structures and Algorithms (DSA) course. While most of my peers were implementing basic algorithms, I wanted to do something unique that applied DSA concepts creatively. After researching online, I discovered that I could use Quadtree data structures for image compression. With no similar projects available as a reference, I decided to build one entirely from scratch, making it a challenging yet rewarding experience.",
      solves:
        'This program addresses the need for efficient image compression, especially for images with large areas of uniform color. By balancing file size and image quality, it offers a practical solution for reducing storage requirements.',
    },
    {
      name: 'Chat App using Firebase',
      description:
        'Built a real-time chat application using Firebase. Supports public chat with username login. Enables creation of private chat rooms with unique codes for secure group conversations.',
      start_date: new Date('2020-11-01'),
      end_date: new Date('2023-11-30'),
      github_link: 'https://github.com/iamhetshah/Chat-App-using-firebase',
      hosted_link: undefined,
      motivation:
        'During the COVID-19 pandemic, I was isolated in a room at another house and only had my Android device with Sololearn installed. Feeling bored, I stumbled upon Firebase while browsing YouTube and found it intriguing. Using my Android device and Sololearn, I built a real-time chat application to pass the time and learn something new.',
      solves:
        'The chat app provides an easy way to connect with others in real time, offering features like public chat and secure private rooms. It’s a lightweight solution for staying connected, especially during isolation.',
      skills: ['Firebase', 'Bootstrap', 'JavaScript'],
    },
    {
      name: 'Bill Splitter - Transaction Minimiser',
      description:
        'This is a user-friendly Angular-based web app designed to streamline the process of splitting group expenses. With a clean interface, it helps you manage shared expenses effortlessly, optimize debt settlement, and track individual expenditures.',
      start_date: new Date(new Date().setFullYear(2023, 10, 1)),
      end_date: new Date(new Date().setFullYear(2023, 10, 30)),
      github_link: 'https://github.com/iamhetshah/Bill-Splitter',
      skills: ['Angular', 'TypeScript', 'Graphs'],
      solves:
        'The app simplifies the process of splitting group expenses, eliminating the confusion and hassle of tracking who owes what. By minimizing the number of transactions, it makes settling debts quick and stress-free.',
      motivation:
        'During an outing with three friends, we faced a confusing scenario where some paid for others, and settling the final amounts became complicated with multiple transactions. This situation gave me the idea to build an app where users could form groups, add people and their transactions, and get a clear, minimized set of transactions to settle all debts effortlessly.',
    },
    {
      name: 'Chess Engine Using Neural Network',
      description:
        'Designed a convolutional neural network (CNN)-based chess engine trained on 8.8GB of grandmaster games in PGN format. The system converts each chess board state into a 1024-bit input vector, feeding it into the neural network to predict and output the best possible move in UCI format.',
      start_date: new Date(new Date().setFullYear(2024, 7, 1)),
      end_date: new Date(new Date().setFullYear(2024, 7, 30)),
      github_link: 'https://github.com/iamhetshah/Chess-Engine-using-CNN',
      skills: ['Python', 'CNN', 'ML', 'Algorithms'],
      motivation:
        'While playing chess against a computer bot, I lost badly, which made me curious about how these bots play so strategically. This curiosity ignited a journey into understanding the mechanics behind chess engines. To dig deeper, I read "Neural Networks for Chess: The Magic of Deep and Reinforcement Learning Revealed," which explained how other chess engines are built and inspired me to create one of my own.',
      solves:
        'This project addresses the challenge of building an intelligent system capable of analyzing chess positions and making optimal moves, just like professional players. It demonstrates how artificial intelligence can mimic human expertise in strategic games.',
    },
    {
      name: 'Music WebApp',
      description:
        'Developed responsive web application that allows users to play any song available on YouTube in the highest audio quality. The app includes search suggestions and caching of YouTube data, which minimizes the number of API requests to enhance efficiency. Allows background audio playback and it provides an uninterrupted listening experience, even with the screen off from YouTube’s vast music library.',
      start_date: new Date(new Date().setFullYear(2024, 3, 1)),
      end_date: new Date(new Date().setFullYear(2024, 3, 30)),
      github_link: 'https://github.com/iamhetshah/Music-WebApp',
      skills: ['Angular', 'Django'],
      motivation:
        'While scrolling through Instagram, I stumbled upon a library that could download videos from YouTube. Around the same time, I was frustrated with Spotify—its frequent ads and the absence of many songs that were available on YouTube. This gave me the idea to create a web app that provides ad-free access to YouTube’s vast music library, supports background playback, and offers a smooth, uninterrupted listening experience.',
      solves:
        'The app solves the problem of finding a cost-effective music solution that combines YouTube’s extensive music collection with features like background play and no advertisements. It’s a convenient way to enjoy music without interruptions.',
    },
    {
      name: 'E commerce website',
      description:
        'An e-commerce web application using Django and JavaScript. This project allows users to add items to their cart, register accounts, log in and out, and manage their shopping lists by editing existing items, adding new ones, or removing unwanted ones.',
      start_date: new Date(new Date().setFullYear(2021, 5, 1)),
      end_date: new Date(new Date().setFullYear(2021, 6, 30)),
      github_link: 'https://github.com/iamhetshah/eCommerce',
      skills: ['Django', 'JavaScript', 'Python'],
      motivation:
        'This project came to life while I was learning Django. As I explored its features, I decided to build an e-commerce application to put my learning into practice. It became an opportunity to understand the backend and frontend dynamics of web applications.',
      solves:
        'The website provides a platform for users to browse, manage shopping carts, and handle their purchases seamlessly. It’s a straightforward solution for managing an online store with essential features.',
    },
  ];

  constructor() {
    this.projects = this.projects.sort((a, b) => {
      const startDateDiff = b.start_date.getTime() - a.start_date.getTime();
      if (startDateDiff !== 0) {
        return startDateDiff; // Sort primarily by start_date
      }
      return b.end_date.getTime() - a.end_date.getTime(); // Sort secondarily by end_date
    });
  }
}
