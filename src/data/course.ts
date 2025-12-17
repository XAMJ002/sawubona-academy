export interface Download {
  label: string;
  href: string;
}

export interface Lesson {
  id: string;
  moduleSlug: string;
  lessonSlug: string;
  title: string;
  summary: string;
  body: string;
  reflectionQuestions: string[];
  downloads: Download[];
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export const course: Course = {
  id: "sawubona-academy",
  title: "JMCG Sawubona Academy: Trauma-Informed Leadership & Workforce Healing",
  description: "A transformative 6-module course designed for managers, supervisors, and practitioners in workforce development, education, community violence intervention, and human services. Learn to see workplace trauma as a public health issue and build people-ready workplaces.",
  modules: [
    {
      id: "module-1",
      slug: "sawubona-seeing-people",
      title: "Sawubona: Seeing People, Not Placements",
      description: "Understand workplace trauma as a public health issue and shift from 'job-ready workers' to 'people-ready workplaces.'",
      lessons: [
        {
          id: "lesson-1-1",
          moduleSlug: "sawubona-seeing-people",
          lessonSlug: "workplace-trauma-public-health",
          title: "Workplace Trauma as a Public Health Issue",
          summary: "Explore how workplace trauma affects both workers and communities, and why individual resilience training isn't enough.",
          body: `Workplace trauma is not simply an individual problem requiring individual solutions. It is a systemic public health crisis that demands systemic intervention.

In workforce development, education, community violence intervention, and human services, we often focus on preparing workers for jobs. But we rarely ask: Are those workplaces prepared for people? Are they designed to support human beings who carry their own histories, their own survival adaptations, their own needs for safety and dignity?

The data tells a sobering story. Burnout rates in human services fields often exceed 50%. Turnover in frontline positions can reach 40-60% annually. These aren't signs of individual weakness—they're symptoms of organizational harm.

When we treat workplace trauma as a public health issue, we shift our lens from "What's wrong with this worker?" to "What's happening in this environment?" We move from resilience training (teaching individuals to endure harm) to system redesign (creating conditions where harm doesn't occur in the first place).

This module invites you to consider: What if the goal isn't to make workers tougher, but to make workplaces more human?`,
          reflectionQuestions: [
            "What forms of workplace trauma have you witnessed or experienced in your professional life?",
            "How does your organization currently talk about—or avoid talking about—staff wellbeing?",
            "What would change if your organization treated high turnover as a public health indicator rather than an HR problem?"
          ],
          downloads: [
            { label: "Workplace Trauma Statistics Summary (PDF)", href: "/docs/workplace-trauma-stats.pdf" },
            { label: "Public Health Framework Overview (PDF)", href: "/docs/public-health-framework.pdf" }
          ]
        },
        {
          id: "lesson-1-2",
          moduleSlug: "sawubona-seeing-people",
          lessonSlug: "workforce-healing-not-extraction",
          title: "Workforce Healing, Not Extraction",
          summary: "Contrast extraction-based workforce models with healing-centered approaches that invest in people's growth.",
          body: `There are two fundamental paradigms for how organizations relate to workers: extraction and investment.

The extraction model treats workers as resources to be consumed. It prioritizes short-term productivity over long-term sustainability. It measures success in outputs and placements, not in human flourishing. When workers burn out, they're replaced. When they struggle, they're "performance managed" out.

The investment model—what we call "people-ready workplaces"—operates from a different premise. It recognizes that sustainable results come from sustainable people. It invests in worker development, wellbeing, and growth. It measures success not just in what workers produce, but in how workers are transformed by their work.

Consider the language we use: "Job-ready workers" implies the burden falls entirely on the individual. They must be ready. They must be prepared. They must fit the job.

"People-ready workplaces" flips the script. Now the organization bears responsibility. Is this workplace ready to receive a human being? Is it designed to support their success? Does it account for the full humanity workers bring through the door?

This isn't just an ethical stance—it's also pragmatic. Organizations that invest in healing-centered approaches see lower turnover, higher engagement, better outcomes, and stronger community relationships.`,
          reflectionQuestions: [
            "Where do you see extraction showing up in your field or organization?",
            "What would a 'people-ready' version of your workplace look like?",
            "What's one policy or practice in your organization that prioritizes extraction over investment?"
          ],
          downloads: [
            { label: "Extraction vs. Healing Audit Worksheet (DOCX)", href: "/docs/extraction-audit.docx" },
            { label: "People-Ready Workplace Checklist (PDF)", href: "/docs/people-ready-checklist.pdf" }
          ]
        },
        {
          id: "lesson-1-3",
          moduleSlug: "sawubona-seeing-people",
          lessonSlug: "reflection-where-harm-shows-up",
          title: "Reflection: Where Harm Shows Up in My System",
          summary: "A guided self-assessment to identify where extraction and harm may be embedded in your own organization.",
          body: `Before we can transform systems, we must see them clearly. This lesson guides you through a structured reflection on your own organization, policies, and practices.

This is not about blame or shame. Systems of harm often develop invisibly, built through accumulated decisions made by well-meaning people responding to real pressures. The goal here is awareness—noticing without judgment, so that we can act with intention.

We'll examine several key areas where harm commonly shows up:

HIRING & ONBOARDING: Do our hiring practices screen out people who've experienced adversity? Do we conflate past struggles with future risk? Does onboarding set people up for success or throw them into deep water?

SUPERVISION & MANAGEMENT: Are supervision conversations supportive or surveillance? Do managers have time and training to actually support their teams? Is feedback delivered in ways that build or diminish?

POLICIES & PROCEDURES: Which policies exist to protect the organization rather than support workers? Where do bureaucratic requirements create unnecessary stress? What rules make sense on paper but cause harm in practice?

METRICS & MEASUREMENT: Do our metrics incentivize sustainable practices or unsustainable ones? Are we measuring what matters or what's easy to count? Do our definitions of "success" account for human cost?

EXITS & ENDINGS: How do people leave this organization? Do we learn from departures or just process them? What happens to people who don't "make it"?

Take time with this reflection. The goal isn't to have all the answers—it's to start asking better questions.`,
          reflectionQuestions: [
            "Complete the System Harm Mapping worksheet for your organization. What patterns do you notice?",
            "What surprised you in this reflection? What felt difficult to acknowledge?",
            "Identify one area where harm shows up that you have some influence over. What's one small step you could take?"
          ],
          downloads: [
            { label: "System Harm Mapping Worksheet (DOCX)", href: "/docs/harm-mapping.docx" },
            { label: "Reflection Journal Template (PDF)", href: "/docs/reflection-journal.pdf" }
          ]
        }
      ]
    },
    {
      id: "module-2",
      slug: "trauma-fundamentals",
      title: "Trauma Fundamentals for Leaders",
      description: "Build foundational understanding of trauma, ACEs, stress responses, and how they show up in workplace behavior.",
      lessons: [
        {
          id: "lesson-2-1",
          moduleSlug: "trauma-fundamentals",
          lessonSlug: "types-of-trauma-responses",
          title: "Types of Trauma & Common Responses",
          summary: "Learn the different types of trauma and how traumatic experiences shape behavior and worldview.",
          body: `Understanding trauma begins with recognizing its many forms. Trauma is not a single experience but a category of experiences that overwhelm our capacity to cope.

TYPES OF TRAUMA:

Acute Trauma results from a single overwhelming event—an accident, assault, sudden loss, or natural disaster. The event is time-limited, but its effects may persist.

Chronic Trauma involves repeated or prolonged exposure to harmful conditions—ongoing abuse, living in a violent neighborhood, years of workplace harassment. The harm accumulates over time.

Complex Trauma refers to multiple traumatic experiences, often interpersonal in nature, typically beginning in childhood. It shapes not just specific responses but core beliefs about self, others, and the world.

Developmental Trauma occurs when children's basic needs for safety, attachment, and nurturing go unmet. It affects brain development and can influence lifelong patterns.

Intergenerational Trauma is passed down through families and communities—the effects of historical oppression, displacement, or violence that echo across generations.

Collective Trauma affects whole communities or groups—shared experiences of disaster, violence, discrimination, or pandemic.

ADVERSE CHILDHOOD EXPERIENCES (ACEs):

The ACEs framework identifies specific childhood adversities—abuse, neglect, household dysfunction—that correlate with adult health and social outcomes. High ACE scores are associated with increased risks for chronic disease, mental health challenges, and difficulties in work and relationships.

TRAUMA RESPONSES:

When facing threat, our nervous systems activate survival responses. The classic "fight or flight" has expanded to include:

Fight: Confrontation, aggression, pushing back
Flight: Withdrawal, avoidance, escape
Freeze: Immobilization, shutdown, dissociation
Fawn: Appeasing, people-pleasing, over-compliance

These aren't choices—they're automatic survival adaptations. In workplace settings, we often see them mislabeled: "aggressive," "disengaged," "checked out," "too accommodating." Reframing these as survival responses changes how we understand and support people.`,
          reflectionQuestions: [
            "How might understanding trauma types change how you interpret staff behavior?",
            "What 'problem behaviors' in your workplace might actually be survival responses?",
            "How does your organization currently respond to workers showing signs of trauma activation?"
          ],
          downloads: [
            { label: "Trauma Types Overview (PDF)", href: "/docs/trauma-types.pdf" },
            { label: "ACEs Information Sheet (PDF)", href: "/docs/aces-info.pdf" }
          ]
        },
        {
          id: "lesson-2-2",
          moduleSlug: "trauma-fundamentals",
          lessonSlug: "barking-dog-wise-owl",
          title: "The Barking Dog & Wise Owl (Brain & Behavior)",
          summary: "Understand the neuroscience of stress responses using accessible metaphors for how our brains work under pressure.",
          body: `To understand trauma responses, it helps to understand what's happening in the brain. We'll use a simple metaphor: the Barking Dog and the Wise Owl.

THE BARKING DOG (Amygdala):

Deep in our brain sits the amygdala—our threat detection center. Think of it as an overzealous guard dog. Its job is to scan for danger and sound the alarm when it detects threat.

The Barking Dog is fast but not very smart. It can't tell the difference between a real threat and something that just reminds us of past threats. A raised voice might trigger the same alarm as an actual attack. A deadline might activate the same response as a physical danger.

When the Barking Dog takes over, our bodies flood with stress hormones. Heart rate increases. Breathing quickens. Blood flows to large muscle groups. We're ready to fight, flee, freeze, or fawn.

THE WISE OWL (Prefrontal Cortex):

The prefrontal cortex—the Wise Owl—handles our higher thinking: planning, reasoning, perspective-taking, impulse control. It can assess situations carefully, consider context, and make thoughtful decisions.

But here's the challenge: when the Barking Dog is barking loudly, the Wise Owl can't think clearly. Stress hormones literally impair prefrontal cortex function. We lose access to our best thinking precisely when we might need it most.

THE WINDOW OF TOLERANCE:

We all have a "window of tolerance"—a zone where we can experience activation without losing access to our Wise Owl. Within this window, we can feel stressed but still think clearly, feel emotion but still regulate.

Trauma narrows this window. People with extensive trauma histories may have very narrow windows—small triggers can push them into full survival mode. Part of healing is gradually widening this window.

IMPLICATIONS FOR LEADERS:

As leaders, we can help people stay in their window of tolerance—or inadvertently push them out of it. Calm, predictable environments help keep Wise Owls online. Chaos, unpredictability, and threat activate Barking Dogs.

Our job isn't to prevent all stress—that's impossible. It's to create conditions where people can experience manageable stress without losing access to their best selves.`,
          reflectionQuestions: [
            "When does your Barking Dog take over? What are your early warning signs?",
            "What helps you return to Wise Owl mode?",
            "How might you create conditions that help your team members stay in their window of tolerance?"
          ],
          downloads: [
            { label: "Brain Response Diagram (PDF)", href: "/docs/brain-response.pdf" },
            { label: "Window of Tolerance Self-Assessment (DOCX)", href: "/docs/window-tolerance.docx" }
          ]
        },
        {
          id: "lesson-2-3",
          moduleSlug: "trauma-fundamentals",
          lessonSlug: "self-reflection-triggers-survival",
          title: "Self-Reflection: My Own Triggers and Survival Skills",
          summary: "A personal exploration of your own trauma responses and the adaptive strategies you've developed.",
          body: `Before we can lead others with trauma awareness, we must understand ourselves. This lesson invites you into a personal exploration of your own history, triggers, and survival adaptations.

A note before we begin: This reflection may bring up difficult memories or feelings. Please take care of yourself. Move at your own pace. Step away if you need to. This work isn't meant to be done in one sitting or in isolation.

UNDERSTANDING YOUR TRIGGERS:

Triggers are stimuli—sights, sounds, situations, interactions—that activate our survival responses. They often connect to past experiences, though the connection may not be obvious.

Common workplace triggers include:
- Raised voices or conflict
- Feeling excluded or overlooked
- Perceived criticism or judgment
- Loss of control or unpredictability
- Deadlines or time pressure
- Authority figures or power dynamics

What triggers you may be different from what triggers others. Part of self-knowledge is mapping your own trigger landscape.

RECOGNIZING YOUR SURVIVAL ADAPTATIONS:

Here's an important reframe: Your survival responses aren't weaknesses—they're skills. They helped you survive. The question isn't how to eliminate them but how to understand them and choose when they serve you.

Someone who learned to appease angry adults may have developed extraordinary emotional attunement. Someone who learned to fight back may bring fierce advocacy to their work. Someone who learned to disappear may excel at reading situations and knowing when to act.

Your survival adaptations have gifts inside them. The goal isn't to reject them but to relate to them consciously.

HOW YOUR HISTORY SHAPES YOUR LEADERSHIP:

Our leadership styles are often expressions of our survival adaptations. The over-functioner who can't delegate. The conflict-avoider who struggles with difficult conversations. The perfectionist who can't tolerate mistakes. The people-pleaser who can't set boundaries.

Understanding these patterns allows us to lead with more choice and less reactivity.`,
          reflectionQuestions: [
            "Complete the Triggers & Survival Skills inventory. What patterns do you notice?",
            "What strengths have emerged from your adaptive strategies?",
            "How do your survival adaptations show up in your leadership? Where do they help? Where do they limit?"
          ],
          downloads: [
            { label: "Triggers & Survival Skills Inventory (DOCX)", href: "/docs/triggers-inventory.docx" },
            { label: "Personal Regulation Toolkit Template (PDF)", href: "/docs/regulation-toolkit.pdf" }
          ]
        }
      ]
    },
    {
      id: "module-3",
      slug: "trauma-informed-supervision",
      title: "Trauma-Informed Supervision & Culture",
      description: "Apply trauma-informed principles to leadership practices, supervision conversations, and organizational culture.",
      lessons: [
        {
          id: "lesson-3-1",
          moduleSlug: "trauma-informed-supervision",
          lessonSlug: "principles-trauma-informed-leadership",
          title: "Principles of Trauma-Informed Leadership",
          summary: "Learn the six core principles of trauma-informed care and how to apply them to everyday leadership.",
          body: `Trauma-informed leadership isn't a technique—it's a lens. It's a way of seeing that shapes everything from how we run meetings to how we give feedback to how we design policies.

SAMHSA (Substance Abuse and Mental Health Services Administration) identifies six key principles that we can translate into leadership practices:

1. SAFETY

Physical safety is foundational, but psychological safety is equally important. People need to feel safe to speak up, make mistakes, share concerns, and be themselves.

Leadership application: Create predictable environments. Follow through on commitments. Address harmful behavior. Be consistent and trustworthy.

2. TRUSTWORTHINESS & TRANSPARENCY

Trust is built through consistency between words and actions, clear communication, and honest acknowledgment of limitations.

Leadership application: Communicate clearly and often. Explain the "why" behind decisions. Admit when you don't know. Keep your promises.

3. PEER SUPPORT

Connection with others who share similar experiences provides validation, hope, and practical support.

Leadership application: Create opportunities for peer connection. Value informal support networks. Encourage mentorship and mutual aid.

4. COLLABORATION & MUTUALITY

Healing happens in relationship, and power differences can be barriers to healing. Sharing power promotes partnership.

Leadership application: Involve staff in decisions that affect them. Value diverse perspectives. Flatten hierarchy where possible. Share credit generously.

5. EMPOWERMENT, VOICE & CHOICE

People who've experienced trauma often felt powerless. Restoring agency is part of healing.

Leadership application: Offer choices whenever possible. Ask rather than tell. Support autonomy. Celebrate initiative.

6. CULTURAL, HISTORICAL & GENDER ISSUES

Trauma is shaped by culture, history, and identity. Effective approaches recognize these contexts and actively resist stereotypes and biases.

Leadership application: Learn about the communities you serve. Acknowledge historical harm. Create culturally responsive practices. Diversify leadership.

These principles aren't a checklist—they're a practice. Each day offers new opportunities to embody them more fully.`,
          reflectionQuestions: [
            "Rate your current leadership on each of the six principles. Where are you strongest? Where is there room to grow?",
            "Choose one principle to focus on this week. What's one concrete action you can take?",
            "How do these principles challenge or confirm your current leadership approach?"
          ],
          downloads: [
            { label: "Trauma-Informed Leadership Principles (PDF)", href: "/docs/ti-leadership-principles.pdf" },
            { label: "Leadership Self-Assessment (DOCX)", href: "/docs/leadership-assessment.docx" }
          ]
        },
        {
          id: "lesson-3-2",
          moduleSlug: "trauma-informed-supervision",
          lessonSlug: "supervision-conversations",
          title: "Trauma-Informed Supervision Conversations",
          summary: "Transform supervision from compliance-checking to growth-fostering dialogue with practical frameworks and scripts.",
          body: `Supervision is where leadership principles meet real relationships. It's where the rubber meets the road—where our intentions either become reality or remain aspirations.

PRESENCE BEFORE CONTENT:

Trauma-informed supervision begins before you discuss any tasks or issues. It begins with presence—creating a relational container that feels safe enough for honest exchange.

Before diving into agenda items:
- Check in genuinely (and listen to the answer)
- Notice the person's state (stressed? energized? withdrawn?)
- Calibrate your approach to what they seem to need
- Let them know you're present with them, not just checking a box

CHECKING IN VS. CHECKING UP:

There's a crucial difference between "checking in" and "checking up." Checking up is surveillance—monitoring compliance, catching problems, exercising control. Checking in is support—understanding experience, offering resources, building relationship.

Checking up sounds like:
"Did you finish the report?"
"Why didn't you meet that deadline?"
"I noticed you were late three times this week."

Checking in sounds like:
"How are you feeling about the report? What do you need?"
"I noticed the deadline passed—what got in the way?"
"I've noticed you've been arriving late. Is everything okay? Is there something I should know about?"

CURIOUS QUESTIONS VS. ASSUMPTIVE QUESTIONS:

Questions reveal our assumptions. Leading questions imply judgment. Open questions invite exploration.

Assumptive: "Why didn't you handle that better?"
Curious: "Tell me about what happened from your perspective."

Assumptive: "Don't you think you should have asked for help?"
Curious: "What options did you consider in that moment?"

NAVIGATING DIFFICULT CONVERSATIONS:

Sometimes supervision requires addressing performance issues or giving critical feedback. Trauma-informed doesn't mean conflict-avoidant.

Key principles:
- Be direct and clear—vagueness creates anxiety
- Separate the person from the behavior
- Express confidence in their ability to change
- Co-create solutions rather than imposing them
- Follow up with support, not just surveillance`,
          reflectionQuestions: [
            "Think about your recent supervision conversations. Were you checking in or checking up?",
            "Script a supervision conversation using the frameworks from this lesson. What feels different?",
            "What shifts would make your supervision meetings more psychologically safe?"
          ],
          downloads: [
            { label: "Supervision Conversation Scripts (DOCX)", href: "/docs/supervision-scripts.docx" },
            { label: "Trauma-Informed Feedback Framework (PDF)", href: "/docs/feedback-framework.pdf" }
          ]
        },
        {
          id: "lesson-3-3",
          moduleSlug: "trauma-informed-supervision",
          lessonSlug: "psychologically-safer-workflows",
          title: "Designing Psychologically Safer Workflows",
          summary: "Redesign workflows, environments, and processes to reduce trauma triggers and support human flourishing.",
          body: `Beyond individual supervision, leaders can redesign systems and workflows to be more trauma-informed. This means examining the daily experience of work and asking: Where does unnecessary stress accumulate? What environmental factors trigger survival responses? How can we build in recovery and regulation?

ENVIRONMENTAL ASSESSMENT:

The physical environment sends signals of safety or threat. Consider:
- Is there natural light? Access to outside?
- Is noise manageable or overwhelming?
- Do people have personal space? Privacy when needed?
- Are there places to decompress after difficult interactions?
- What messages does the physical space communicate?

THE DAILY STRESS MAP:

Walk through a typical day for your staff. Where are the stress hotspots?
- Morning arrival: Is it rushed? Chaotic? What tone does it set?
- Transitions: How do people move between tasks or clients?
- High-demand periods: What happens during peak stress times?
- Difficult interactions: How do people recover after hard conversations?
- End of day: Is there closure? Or just exhaustion?

REDUCING UNNECESSARY UNPREDICTABILITY:

Some unpredictability is inherent in human services work. But often we add unnecessary chaos through poor planning, unclear expectations, or last-minute changes.

Ask: What surprises could we eliminate? What could be more predictable?
- Clear schedules posted in advance
- Consistent meeting times and formats
- Established protocols for common situations
- Early warning about upcoming changes

BUILDING IN RECOVERY:

We can't eliminate stress, but we can build in recovery. What would it look like to:
- Protect lunch breaks (really protect them)
- Build buffer time between intense interactions
- Create decompression rituals after difficult work
- Encourage micro-breaks throughout the day
- Model sustainable pace from leadership

POLICIES THAT HARM VS. POLICIES THAT HEAL:

Some policies exist to protect organizations at the expense of workers. Review your policies through a trauma-informed lens:
- Does this policy assume good intent or bad?
- Does it offer flexibility or demand rigid compliance?
- Does it support human needs or ignore them?
- Who does this policy serve? Who does it burden?`,
          reflectionQuestions: [
            "Walk through a typical day for your staff. Where are the stress hotspots?",
            "What's one unnecessary source of stress or unpredictability you could reduce?",
            "Identify one workflow change you could implement within the next month."
          ],
          downloads: [
            { label: "Workflow Safety Audit (DOCX)", href: "/docs/workflow-audit.docx" },
            { label: "Policy Review Checklist (PDF)", href: "/docs/policy-review.pdf" }
          ]
        }
      ]
    },
    {
      id: "module-4",
      slug: "healing-centered-workforce",
      title: "Healing-Centered Workforce Development",
      description: "Reimagine workforce practices—from intake to metrics—through a healing-centered lens.",
      lessons: [
        {
          id: "lesson-4-1",
          moduleSlug: "healing-centered-workforce",
          lessonSlug: "screening-out-to-building-capacity",
          title: "From Screening Out to Building Capacity",
          summary: "Challenge deficit-based screening and embrace capacity-building approaches to workforce development.",
          body: `Traditional workforce development often operates through a screening paradigm: identify barriers, sort out those who have them, serve those who remain. This approach seems practical but carries hidden violence.

THE SCREENING PARADIGM:

Screening asks: "Is this person job-ready?" It focuses on deficits, barriers, and risk factors. It treats struggles as disqualifiers rather than context.

Common screening criteria include:
- Criminal background (but not context or rehabilitation)
- Employment gaps (but not caregiving or survival)
- Credit history (but not systemic economic injustice)
- Educational credentials (but not lived expertise)
- "Soft skills" assessments (but whose definition of skills?)

Each criterion seems neutral but encodes assumptions about who deserves opportunity and who doesn't.

THE HIDDEN VIOLENCE:

When someone is "screened out," what happens? They don't disappear—they return to circumstances that may grow more desperate. They learn again that doors are closed to people like them. They experience one more institutional rejection.

Meanwhile, organizations can claim high "success rates" precisely because they've excluded those who need the most support.

THE CAPACITY-BUILDING ALTERNATIVE:

What if we started from different questions?
- Not "Is this person ready?" but "What would help this person succeed?"
- Not "What barriers disqualify them?" but "What supports would address their challenges?"
- Not "Do they fit our program?" but "How can our program fit their needs?"

This shift requires building organizational capacity—not just individual capacity. It asks what we need to change, not just what they need to change.

STRENGTHS-BASED ASSESSMENT:

Strengths-based approaches don't ignore challenges—they contextualize them within a fuller picture of assets, skills, and resilience. They ask:
- What has this person already survived and overcome?
- What skills did that survival require?
- What supports have helped them before?
- What are they working toward? What matters to them?

People who've navigated significant adversity often have extraordinary capacities—just not the ones traditional assessments measure.`,
          reflectionQuestions: [
            "List the barriers that disqualify people in your system. How many are about the person vs. about the program's capacity?",
            "What would it take for your organization to serve people currently being screened out?",
            "How could you redesign intake to be more strengths-based?"
          ],
          downloads: [
            { label: "Screening vs. Capacity-Building Audit (DOCX)", href: "/docs/screening-audit.docx" },
            { label: "Strengths-Based Intake Questions (PDF)", href: "/docs/strengths-intake.pdf" }
          ]
        },
        {
          id: "lesson-4-2",
          moduleSlug: "healing-centered-workforce",
          lessonSlug: "mapping-workforce-gatekeeping",
          title: "Mapping Workforce Gatekeeping and Harm",
          summary: "Identify where your systems create barriers, perpetuate inequity, or re-traumatize the people they claim to serve.",
          body: `Every system has gatekeeping functions—points where access is granted or denied, where some people advance and others don't. These gates often operate invisibly, appearing as neutral requirements or practical necessities.

VISIBLE AND INVISIBLE GATES:

Visible gates are explicit requirements: application forms, eligibility criteria, background checks, assessments.

Invisible gates are harder to see: cultural assumptions, unwritten rules, relationship networks, implicit bias, the way "professionalism" is defined.

Both types can exclude people who could otherwise succeed.

MAPPING THE PARTICIPANT JOURNEY:

To see your gates clearly, trace the full journey someone takes through your system:

FIRST CONTACT: How do people learn about you? Who doesn't find out? What does your outreach communicate about who belongs?

APPLICATION: What does applying require? Literacy level? Technology access? Documentation? Time? Who falls out at this stage?

INTAKE: What happens at intake? How long does it take? How many hoops must people jump through? What gets asked? What gets assumed?

ACTIVE PARTICIPATION: Once enrolled, what does participation demand? Punctuality? Dress codes? Communication styles? What happens when people struggle?

COMPLETION/EXIT: Who completes? Who doesn't? What happens to those who don't "make it"? Is exit dignified or humiliating?

IDENTIFYING HARM HOTSPOTS:

At each stage, ask:
- Where do people fall out? Why?
- What requirements exist? Do they actually predict success or just filter for compliance?
- Where do people experience shame, judgment, or frustration?
- What would someone with trauma history experience at this point?

POWER ANALYSIS:

Behind every gate is a decision-maker. Ask:
- Who decides who gets in?
- What power do they have? What biases might they carry?
- Who benefits from current gatekeeping? Who is harmed?
- Whose interests are served by keeping things as they are?`,
          reflectionQuestions: [
            "Complete the Workforce Gatekeeping Map for one of your programs. What gates exist at each stage?",
            "Where does your system create harm it doesn't intend?",
            "Which gates could be removed or redesigned? What would that require?"
          ],
          downloads: [
            { label: "Workforce Gatekeeping Map (DOCX)", href: "/docs/gatekeeping-map.docx" },
            { label: "Equity Analysis Framework (PDF)", href: "/docs/equity-framework.pdf" }
          ]
        },
        {
          id: "lesson-4-3",
          moduleSlug: "healing-centered-workforce",
          lessonSlug: "redesigning-metrics-partnerships",
          title: "Redesigning Metrics and Partnerships",
          summary: "Reimagine how we measure success and build partnerships that center participant dignity.",
          body: `"What gets measured gets managed"—and often, what gets measured causes harm. Our metrics shape behavior throughout organizations and systems. If we measure the wrong things, we incentivize the wrong behaviors.

HOW METRICS DRIVE BEHAVIOR:

Consider common workforce metrics:
- Placement rate: Incentivizes placing people in any job, not necessarily good jobs
- 90-day retention: Encourages selecting "easy" candidates who'll stay regardless
- Cost per placement: Rewards efficiency over effectiveness
- Credential attainment: Values credentials over actual learning

Staff respond rationally to these incentives—often in ways that harm participants.

WHAT WOULD HEALING-CENTERED METRICS MEASURE?

What if we measured:
- Quality of placements (wages, benefits, growth potential)
- Long-term career trajectory (not just first job)
- Participant experience and dignity
- Skill development (including survival skills recognized)
- Relationship quality between staff and participants
- Staff wellbeing and sustainability

These are harder to measure—but measuring them would incentivize different behaviors.

NEGOTIATING WITH FUNDERS:

Many harmful metrics come from funder requirements. But funders are often more flexible than we assume—especially when presented with compelling alternatives.

Strategies for funder conversations:
- Share stories that illustrate metric limitations
- Propose alternative measures with rationale
- Offer to pilot new approaches
- Build coalitions with other grantees
- Document unintended consequences of current metrics

PARTNERSHIP DESIGN:

Workforce systems involve multiple partners—employers, training providers, support services. How do partnership agreements reflect values?

Healing-centered partnership asks:
- Do partners share our commitment to participant dignity?
- What happens when partners fall short?
- Are participant voices included in partnership decisions?
- How is power distributed among partners?
- Do agreements create accountability for harm?`,
          reflectionQuestions: [
            "What metrics does your organization track? What behaviors do they incentivize?",
            "Design three alternative metrics that would measure healing, growth, or dignity.",
            "What would you need to bring to a funder conversation about changing metrics?"
          ],
          downloads: [
            { label: "Healing-Centered Metrics Design Template (DOCX)", href: "/docs/metrics-template.docx" },
            { label: "Funder Conversation Talking Points (PDF)", href: "/docs/funder-talking-points.pdf" }
          ]
        }
      ]
    },
    {
      id: "module-5",
      slug: "leaders-own-healing",
      title: "Leaders' Own Healing, Boundaries, and Burnout",
      description: "Address the occupational hazards of healing-centered work and design a sustainable leadership practice.",
      lessons: [
        {
          id: "lesson-5-1",
          moduleSlug: "leaders-own-healing",
          lessonSlug: "secondary-vicarious-trauma-burnout",
          title: "Secondary Trauma, Vicarious Trauma, Burnout",
          summary: "Understand the different occupational hazards of trauma-adjacent work and recognize signs in yourself.",
          body: `Those who work with trauma-affected populations absorb some of that trauma. This isn't weakness—it's an occupational hazard that must be acknowledged and addressed.

DISTINGUISHING THE TERMS:

SECONDARY TRAUMATIC STRESS (STS):
STS results from indirect exposure to trauma through hearing about others' traumatic experiences. It can produce symptoms similar to PTSD: intrusive thoughts, avoidance, hypervigilance, emotional numbing.

It can develop quickly—sometimes from a single powerful story—and may be triggered by specific narratives or populations.

VICARIOUS TRAUMA:
Vicarious trauma refers to the cumulative transformation that happens from empathically engaging with survivors over time. It affects core beliefs about self, others, and the world.

Signs include:
- Eroded sense of safety
- Difficulty trusting people
- Loss of hope or meaning
- Cynicism about change
- Feeling like the world is dangerous

Unlike STS, vicarious trauma develops gradually and shifts worldview rather than producing specific symptoms.

BURNOUT:
Burnout is the exhaustion that comes from unsustainable demands over time. It's characterized by:
- Emotional exhaustion (feeling drained)
- Depersonalization (detachment from work/people)
- Reduced sense of accomplishment (feeling ineffective)

Burnout is often organizational—caused by systemic factors like unmanageable workloads, lack of control, insufficient support, or values conflicts.

THE COMPASSION FATIGUE/SATISFACTION SPECTRUM:

On one end: Compassion Fatigue—the erosion of our ability to empathize and care, from absorbing too much suffering without adequate recovery.

On the other end: Compassion Satisfaction—the fulfillment that comes from effectively helping others, the sense of meaning and purpose in the work.

Both are possible. The goal isn't to eliminate exposure but to build practices that sustain compassion satisfaction while managing compassion fatigue.

SELF-ASSESSMENT:

The Professional Quality of Life (ProQOL) assessment can help you understand your current state across these dimensions. It's not diagnostic—it's a reflection tool.`,
          reflectionQuestions: [
            "Complete the ProQOL self-assessment. What do you notice about your results?",
            "Which of these phenomena—STS, vicarious trauma, or burnout—do you most relate to?",
            "What patterns do you notice in your own relationship to this work?"
          ],
          downloads: [
            { label: "ProQOL Self-Assessment (DOCX)", href: "/docs/proqol-assessment.docx" },
            { label: "Occupational Stress Overview (PDF)", href: "/docs/occupational-stress.pdf" }
          ]
        },
        {
          id: "lesson-5-2",
          moduleSlug: "leaders-own-healing",
          lessonSlug: "values-survival-work-identity",
          title: "Values, Survival Skills, and Work Identities",
          summary: "Explore how your history shapes your leadership and when work identity becomes over-identification.",
          body: `Many people enter human services, education, and healing work because of their own experiences. The wounded healer archetype is real—and it carries both gifts and risks.

THE WOUNDED HEALER:

Those who've experienced adversity often bring extraordinary capacities:
- Deep empathy born from shared experience
- Persistence forged through their own struggles
- Intuitive understanding of trauma responses
- Authentic connection with those they serve
- Fierce advocacy against injustice

These are genuine gifts. They matter. They make a difference.

But the wounded healer also carries risks:
- Over-identification with clients' pain
- Difficulty maintaining boundaries
- Tendency to overwork to prove worth
- Unresolved issues triggered by the work
- Using helping as a way to avoid own healing

CLARIFYING YOUR VALUES:

What values draw you to this work? Not the answers that sound good—the real ones.

Some possibilities:
- Justice and fairness
- Service to others
- Personal redemption
- Being needed and valuable
- Creating change you wanted but didn't receive
- Avoiding your own pain through focusing on others'

There's no right answer. But honesty about motivation helps us work more sustainably.

SURVIVAL SKILLS IN LEADERSHIP:

Our survival adaptations from earlier life often show up in how we lead:
- The fixer who can't let others struggle
- The hypervigilant scanner always looking for threats
- The accommodator who can't say no
- The performer who needs constant validation
- The controller who can't delegate

Again—these adaptations have served you. The question is whether they still serve you in every context, or whether some expansion would be helpful.

OVER-IDENTIFICATION WITH WORK:

When work becomes identity, everything feels personal. Criticism of your program feels like criticism of you. Clients' failures feel like your failures. Taking time off feels like abandonment.

Signs of over-identification:
- Can't stop thinking about work
- Personal worth tied to work outcomes
- Difficulty describing yourself without referencing work
- Guilt about having needs separate from work
- Relationships suffering because of work obsession

Some identification with work is healthy—it provides meaning and purpose. But over-identification leads to burnout and impaired effectiveness.`,
          reflectionQuestions: [
            "Complete the Values Clarification worksheet. What surprised you?",
            "How do your survival skills serve you in leadership? Where might they limit you?",
            "What would it mean to be fully yourself outside of your work identity?"
          ],
          downloads: [
            { label: "Values Clarification Worksheet (DOCX)", href: "/docs/values-worksheet.docx" },
            { label: "Survival Skills Inventory (DOCX)", href: "/docs/survival-skills.docx" }
          ]
        },
        {
          id: "lesson-5-3",
          moduleSlug: "leaders-own-healing",
          lessonSlug: "healing-aligned-leadership-plan",
          title: "Designing a Healing-Aligned Leadership Plan",
          summary: "Create a personal sustainability plan that protects your wellbeing while enabling effective leadership.",
          body: `Sustainability isn't selfish—it's strategic. Leaders who burn out can't lead. Leaders who lose compassion can't help. Taking care of yourself is part of taking care of your mission.

COMPONENTS OF SUSTAINABLE LEADERSHIP:

BOUNDARIES:
Boundaries aren't walls—they're membranes. They define where you end and work begins. They protect your energy for what matters most.

Key boundary areas:
- Time: When does work end? What's protected?
- Energy: What drains you? What's off-limits?
- Emotional: What's yours to carry? What's not?
- Relational: How available are you? To whom?

Boundaries aren't one-time decisions—they're ongoing practices that require constant attention.

REST AND RECOVERY:
Rest isn't just the absence of work—it's active restoration.

Types of rest:
- Physical: Sleep, movement, nutrition
- Mental: Stillness, boredom, low-stimulation time
- Social: Connection, play, community
- Emotional: Processing, release, support
- Spiritual: Meaning-making, awe, purpose

Which types of rest are you getting enough of? Which are depleted?

PROFESSIONAL SUPPORT:
Leaders need support too—maybe especially leaders.

Sources of professional support:
- Supervision or coaching
- Peer support groups
- Therapy or counseling
- Mentors who've walked this path
- Professional development that feeds you

COMMUNITY AND CONNECTION:
Isolation accelerates burnout. Connection provides protection.

Who are your people? Not just colleagues—who sees you fully? Who can you be honest with? Who helps you remember who you are beyond work?

PERSONAL HEALING WORK:
If you're doing healing-centered work, are you doing your own healing? This might include:
- Personal therapy
- Healing practices from your tradition
- Body-based practices
- Spiritual practices
- Community healing spaces

YOUR HEALING-ALIGNED LEADERSHIP PLAN:
Using the template provided, create a concrete plan that addresses:
- Daily practices (what you do every day)
- Weekly rhythms (what you protect each week)
- Monthly renewal (what restores you on longer cycles)
- Support structures (who and what supports you)
- Warning signs and responses (how you catch yourself before burnout)`,
          reflectionQuestions: [
            "Complete the Healing-Aligned Leadership Plan template. What commitments are you making?",
            "What boundaries do you need that you don't currently have?",
            "What support do you need that you're not currently getting?"
          ],
          downloads: [
            { label: "Healing-Aligned Leadership Plan Template (DOCX)", href: "/docs/leadership-plan.docx" },
            { label: "Boundary-Setting Scripts (PDF)", href: "/docs/boundary-scripts.pdf" }
          ]
        }
      ]
    },
    {
      id: "module-6",
      slug: "people-ready-systems",
      title: "From Individual Leaders to People-Ready Systems",
      description: "Scale trauma-informed practices from individual leadership to organizational culture change.",
      lessons: [
        {
          id: "lesson-6-1",
          moduleSlug: "people-ready-systems",
          lessonSlug: "organizational-culture-intervention",
          title: "Organizational Culture as the Intervention",
          summary: "Understand why culture change is essential and how to assess and influence your organization's culture.",
          body: `Individual leadership matters—but lasting change requires shifting organizational culture. Culture is the water fish swim in: invisible, pervasive, and powerful. It shapes what's possible before any individual action is taken.

WHAT IS CULTURE?

Edgar Schein's model identifies three levels:

ARTIFACTS: Visible elements—office layout, dress codes, language used, rituals and ceremonies. Easy to see, hard to interpret.

ESPOUSED VALUES: Stated beliefs—mission statements, official policies, what leaders say matters. What the organization claims to value.

UNDERLYING ASSUMPTIONS: Unconscious, taken-for-granted beliefs that actually drive behavior. What the organization really values, revealed through action.

The gap between espoused values and underlying assumptions is often where harm lives.

CULTURE EATS STRATEGY FOR BREAKFAST:

You can design beautiful trauma-informed policies, but if the culture doesn't support them, they'll fail. Culture determines:
- What behaviors get rewarded or punished
- What stories get told
- How decisions really get made
- Who belongs and who doesn't
- What's possible to even imagine

ASSESSING YOUR CULTURE:

To change culture, you must first see it clearly:
- What do people actually do, regardless of policy?
- What happens when policies conflict with unwritten rules?
- What gets celebrated? What gets punished?
- What can't be said? What's taboo?
- What would a newcomer learn about "how things work here"?

CULTURE CHANGE LEVERS:

As a leader, you influence culture through:

WHAT YOU PAY ATTENTION TO: What you ask about, measure, and prioritize signals what matters.

HOW YOU REACT TO CRISES: Moments of stress reveal true values and set precedents.

HOW YOU ALLOCATE RESOURCES: Money and time reveal priorities despite words.

ROLE MODELING: What you do teaches more than what you say.

WHO YOU RECRUIT AND PROMOTE: Selection criteria communicate values.

STORIES AND RITUALS: Narratives and ceremonies reinforce culture.

BUILDING COALITIONS:

Culture change rarely happens through individual effort. You need allies—people who share the vision and will work alongside you.

Who might be your coalition?
- Other leaders who resonate with this approach
- Staff who are already practicing trauma-informed work
- External partners who could provide support
- Board members or executives who could champion change`,
          reflectionQuestions: [
            "Complete the Organizational Culture Assessment for your workplace. What do you notice about the gap between espoused values and underlying assumptions?",
            "Who are potential allies for culture change in your organization?",
            "Which culture change levers do you have most influence over?"
          ],
          downloads: [
            { label: "Organizational Culture Assessment (DOCX)", href: "/docs/culture-assessment.docx" },
            { label: "Coalition-Building Stakeholder Map (PDF)", href: "/docs/stakeholder-map.pdf" }
          ]
        },
        {
          id: "lesson-6-2",
          moduleSlug: "people-ready-systems",
          lessonSlug: "90-day-implementation-plan",
          title: "Building a 90-Day Sawubona Implementation Plan",
          summary: "Create a concrete, achievable plan to implement trauma-informed principles in your sphere of influence.",
          body: `Learning without action is incomplete. This lesson guides you in creating a concrete 90-day plan to implement what you've learned.

WHY 90 DAYS?

Ninety days is:
- Long enough to see meaningful change
- Short enough to maintain focus and urgency
- Aligned with quarterly rhythms many organizations use
- Sufficient to test ideas and iterate

SELECTING PRIORITIES:

You can't change everything at once. Focus on:

HIGH IMPACT: What would make the biggest difference for the most people?

WITHIN YOUR CONTROL: What can you actually influence without waiting for others?

ACHIEVABLE: What can realistically be accomplished in 90 days?

STRATEGIC: What builds momentum for larger changes?

Consider both quick wins (visible, achievable, builds confidence) and foundation-builders (less visible, but creates conditions for future change).

STRUCTURE OF YOUR PLAN:

MONTH 1: Foundation
- Assess current state
- Build relationships with allies
- Identify quick wins
- Communicate intention

MONTH 2: Action
- Implement priority changes
- Address obstacles
- Gather feedback
- Adjust approach

MONTH 3: Sustainment
- Embed changes into routine
- Document learning
- Plan next phase
- Celebrate progress

BUILDING IN ACCOUNTABILITY:

Plans without accountability often fail. Structure accountability through:
- Regular check-ins with a peer or supervisor
- Public commitments to your team
- Calendar blocks for implementation work
- Progress tracking visible to you

ANTICIPATING OBSTACLES:

What could get in the way? For each obstacle, plan your response:
- Resistance from colleagues → Response: _______
- Time constraints → Response: _______
- Organizational inertia → Response: _______
- Your own discouragement → Response: _______

METRICS FOR PROGRESS:

How will you know if you're succeeding? Choose indicators that are:
- Observable (you can actually see them)
- Meaningful (they reflect real change)
- Leading (they predict future success, not just measure past)

Remember: Progress, not perfection. The goal isn't a flawless implementation—it's meaningful movement in the right direction.`,
          reflectionQuestions: [
            "Complete your 90-Day Sawubona Implementation Plan. What are your top 3 priorities?",
            "What obstacles do you anticipate? How will you respond?",
            "Who will hold you accountable? How will you track progress?"
          ],
          downloads: [
            { label: "90-Day Sawubona Implementation Plan (DOCX)", href: "/docs/90-day-plan.docx" },
            { label: "Obstacle Planning Worksheet (PDF)", href: "/docs/obstacle-planning.pdf" }
          ]
        },
        {
          id: "lesson-6-3",
          moduleSlug: "people-ready-systems",
          lessonSlug: "capstone-share-commit",
          title: "Capstone: Share & Commit",
          summary: "Share your implementation plan with peers, make commitments, and step into your role as a Sawubona leader.",
          body: `You've traveled through six modules. You've examined workplace trauma as a public health issue, learned the fundamentals of trauma and its effects, explored trauma-informed supervision and culture, reimagined workforce development, addressed your own sustainability, and designed systemic change.

Now comes the most important part: commitment.

THE POWER OF PUBLIC COMMITMENT:

Research shows that public commitments are far more likely to be kept than private intentions. When we declare our plans to others, we activate social accountability and identity alignment.

Your commitment isn't just a promise to act—it's a declaration of who you're becoming.

SHARING YOUR PLAN:

Whether in a live circle with other Sawubona leaders or in written form, share:

YOUR VISION: What are you working toward? What would success look like?

YOUR 90-DAY PRIORITIES: What specifically will you do in the next three months?

YOUR WHY: Why does this matter to you personally? What draws you to this work?

YOUR SUPPORT NEEDS: What do you need from others to succeed? How can this community help?

RECEIVING OTHERS' COMMITMENTS:

This is also a time to witness others' commitments. When peers share their plans:
- Listen with full presence
- Offer encouragement and belief
- Note connections to your own work
- Consider how you might support each other

STEPPING INTO SAWUBONA LEADERSHIP:

Sawubona means "I see you." As a Sawubona leader, you commit to seeing:
- The full humanity of workers, not just their productivity
- The context behind behavior, not just the behavior itself
- The system's role in harm, not just individual deficits
- Your own humanity, including your limits and needs
- The possibility of transformation, even when change is hard

This isn't a certification you earn and complete. It's a practice you inhabit and deepen over time.

STAYING CONNECTED:

The end of this course isn't the end of the journey. Consider:
- Joining ongoing Sawubona learning communities
- Finding accountability partners from this cohort
- Returning to these materials when you need grounding
- Sharing what you learn with others who are ready

You are not alone in this work. A growing community of leaders is committed to building people-ready workplaces. You are now part of that community.

Sawubona—I see you. Now go be seen, and help others be seen too.`,
          reflectionQuestions: [
            "Write your commitment statement (250-500 words). What are you committing to and why?",
            "Who will you share your plan with for accountability?",
            "How will you stay connected to the Sawubona community going forward?"
          ],
          downloads: [
            { label: "Capstone Submission Guide (PDF)", href: "/docs/capstone-guide.pdf" },
            { label: "Commitment Statement Template (DOCX)", href: "/docs/commitment-template.docx" }
          ]
        }
      ]
    }
  ]
};

// Helper functions to navigate course content
export function getAllLessons(): Lesson[] {
  return course.modules.flatMap((m) => m.lessons;
}

export function getLessonBySlug(moduleSlug: string, lessonSlug: string): Lesson | undefined {
  const mod = = course.modules.find((m) => m.slug === moduleSlug);
  if (!mod) return undefined;
  return mod.lessons.find((l) => l.lessonSlug === lessonSlug);
}

export function getModuleBySlug(moduleSlug: string): Module | undefined {
  return course.modules.find((m) => m.slug === moduleSlug);
}

export function getAdjacentLessons(lessonId: string): {
  previous: Lesson | null;
  next: Lesson | null;
} {
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  
  return {
    previous: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}

export function getFirstLesson(): Lesson {
  return course.modules[0].lessons[0];
}
