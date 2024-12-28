import { Component } from '@angular/core';
import AppConstants from '../../app.constants';
import { ProjectCardComponent } from '../project-card/project-card.component';
import ProjectModel from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
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
    },
    {
      name: 'Chat App using Firebase',
      description:
        'Built a real-time chat application using Firebase. Supports public chat with username login. Enables creation of private chat rooms with unique codes for secure group conversations.',
      start_date: new Date('2020-11-01'),
      end_date: new Date('2023-11-30'),
      github_link: 'https://github.com/iamhetshah/Chat-App-using-firebase',
      hosted_link: undefined,
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
    },
    {
      name: 'Chess Engine Using Neural Network',
      description:
        'Designed a convolutional neural network (CNN)-based chess engine trained on 8.8GB of grandmaster games in PGN format. The system converts each chess board state into a 1024-bit input vector, feeding it into the neural network to predict and output the best possible move in UCI format.',
      start_date: new Date(new Date().setFullYear(2024, 7, 1)),
      end_date: new Date(new Date().setFullYear(2024, 7, 30)),
      github_link: 'https://github.com/iamhetshah/Chess-Engine-using-CNN',
      skills: ['Python', 'CNN', 'ML', 'Algorithms'],
      motivation: 'The motivation was to learn new things.',
      solves: 'This does not solve anythin.',
    },
    {
      name: 'Music WebApp',
      description:
        'Developed responsive web application that allows users to play any song available on YouTube in the highest audio quality. The app includes search suggestions and caching of YouTube data, which minimizes the number of API requests to enhance efficiency. Allows background audio playback and it provides an uninterrupted listening experience, even with the screen off from YouTube’s vast music library.',
      start_date: new Date(new Date().setFullYear(2024, 3, 1)),
      end_date: new Date(new Date().setFullYear(2024, 3, 30)),
      github_link: 'https://github.com/iamhetshah/Music-WebApp',
      skills: ['Angular', 'Django'],
    },
    {
      name: 'E commerce website',
      description:
        'An e-commerce web application using Django and JavaScript. This project allows users to add items to their cart, register accounts, log in and out, and manage their shopping lists by editing existing items, adding new ones, or removing unwanted ones.',
      start_date: new Date(new Date().setFullYear(2021, 5, 1)),
      end_date: new Date(new Date().setFullYear(2021, 6, 30)),
      github_link: 'https://github.com/iamhetshah/eCommerce',
      skills: ['Django', 'JavaScript', 'Python'],
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
