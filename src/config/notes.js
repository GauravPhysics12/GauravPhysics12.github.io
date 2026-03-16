export const categories = [
    {
        name: 'Mathematical General Relativity',
        slug: 'general-relativity',
        description: 'Notes on spacetime, gravity, and the mathematical foundations required for GR.',
        notes: [
            {
                title: 'Special Relativity Notes',
                pdfUrl: '/notes/SR-1.pdf',
            },
            {
                title: 'Differential Geometry (Introductory)',
                pdfUrl: '/notes/Diff-geo-1.pdf',
                comment: 'This is a less rigorous introduction, recommended for a first look at the subject.'
            },
            {
                title: 'Intro to Topological Spaces',
                pdfUrl: '/notes/topological-spaces.pdf',
            },
            {
                title: 'Notes on Topological Manifolds',
                pdfUrl: '/notes/topological-manifold.pdf',
            },
            {
                title: 'Notes on Multilinear Algebra',
                pdfUrl: '/notes/Multilinear algebra (2).pdf',
            },
            {
                title: 'Notes on Manifolds',
                pdfUrl: '/notes/Manifolds.pdf',
            },
            {
                title: 'Notes on Differentiable Manifolds',
                pdfUrl: '/notes/differentiable-manifolds.pdf',
            },
        ],
    },
    {
        name: 'Astrophysics',
        slug: 'astrophysics',
        description: 'Notes on various topics in astrophysics, from stellar interiors to radiative processes.',
        notes: [
            {
                title: 'Notes on Radiative Transfer',
                pdfUrl: '/notes/Radiative.pdf',
            },
        ],
    },
    {
        name: 'Workshops & Guest Lectures',
        slug: 'workshops',
        description: 'Presentation slides and handouts from various workshops and guest lectures.',
        notes: [
            {
                title: 'Gravitational Perturbation Theory',
                pdfUrl: '/notes/workshop-grav-perturbation.pdf',
                comment: 'Slides from the session hosted by the IISc Astronomy Club.'
            },
            {
                title: 'Astrophysics Overview',
                pdfUrl: '/notes/guest-lecture-astrophysics.pdf',
                comment: 'Slide deck from a recent guest lecture.'
            },
        ],
    },
];