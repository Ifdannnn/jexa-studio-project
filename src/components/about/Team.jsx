const Team = () => {
    const teamMembers = [
        { name: "Ahmad Fadli", role: "Principal Architect", img: "https://i.pravatar.cc/400?img=11" },
        { name: "Maya Sari", role: "Lead Interior Designer", img: "https://i.pravatar.cc/400?img=5" },
        { name: "David Chen", role: "Furniture Specialist", img: "https://i.pravatar.cc/400?img=3" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Our Team</span>
                <h2 className="text-4xl font-bold font-sans text-dark mb-12">Meet The Creative Minds</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                            <p className="text-primary text-sm uppercase tracking-wide mt-2">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
