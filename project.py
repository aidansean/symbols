from project_module import project_object, image_object, link_object, challenge_object

p = project_object('symbols', 'Symbol browser')
p.domain = 'http://www.aidansean.com/'
p.folder_name = 'aidansean'
p.path = 'symbols'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.github_repo_name = 'symbols'
p.mathjax = True
p.tags = 'Tools,Physics,Web design'
p.technologies = 'CSS,HTML,JavaScript,ZeroClipboard'
p.links.append(link_object(p.domain, 'symbols', 'Live page'))
p.introduction = 'This is a simple tool to allow the user to quickly copy a string of symbols.'
p.overview = '''This is a mixture of Javascript and the flash based ZeroClipboard.  The user clicks on the symbols they want and copy the output with a single click.'''

p.challenges.append(challenge_object('The project required making ZeroClipboard work.', 'Making ZeroClipboard work for single clikcks is not trivial for several DOM elements, so it now only works for a single DOM element.', 'Resolved'))

p.challenges.append(challenge_object('The list of symbols needs to be updated simply and easily.', 'Symbols are arranged in groups with special functions to manage them, so symbols can be added in a single line.', 'Resolved'))
